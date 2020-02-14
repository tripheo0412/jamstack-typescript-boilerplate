#!/bin/sh

set -eu

token=${GITHUB_DEPLOYMENTS_TOKEN:?"Missing GITHUB_TOKEN environment variable"}

if ! storybook_deployment_id=$(cat storybook_deployment); then
  echo "Deployment ID was not found" 1>&2
  exit 3
fi



if [ "$1" = "error" ]; then
  curl -s \
    -X POST \
    -H "Authorization: bearer ${token}" \
    -d "{\"state\": \"error\", \"environment\": \"storybook\"" \
    -H "Content-Type: application/json" \
    "https://api.github.com/repos/${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}/deployments/${storybook_deployment_id}/statuses"
  exit 1
fi

if ! repository=$(curl -s \
                  -X GET \
                  -H "Authorization: bearer ${token}" \
                  -d "{}" \
                  -H "Content-Type: application/json" \
                  "https://api.github.com/repos/${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}"); then
  echo "Could not fetch repository data" 1>&2
  exit 1
fi

if ! repository_id=$(echo "${repository}" | python -c 'import sys, json; print json.load(sys.stdin)["id"]'); then
  echo "Could not extract repository ID from API response" 1>&2
  exit 3
fi

path_to_repo=$(echo "$CIRCLE_WORKING_DIRECTORY" | sed -e "s:~:$HOME:g")
url="https://${CIRCLE_BUILD_NUM}-${repository_id}-gh.circle-artifacts.com/0/build-storybook/index.html"

if ! storybook_deployment=$(curl -s \
                  -X POST \
                  -H "Authorization: bearer ${token}" \
                  -d "{\"state\": \"success\",\"description\": \"deployed on CircleCI\",  \"environment\": \"storybook\", \"environment_url\": \"${url}\", \"target_url\": \"${url}\", \"log_url\": \"${url}\"}" \
                  -H "Content-Type: application/json" \
                  "https://api.github.com/repos/${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}/deployments/${storybook_deployment_id}/statuses"); then
  echo "POSTing deployment status failed, exiting (not failing build)" 1>&2
  exit 1
fi



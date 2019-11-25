#!/bin/sh

set -eu

token=${GITHUB_DEPLOYMENTS_TOKEN:?"Missing GITHUB_TOKEN environment variable"}


if ! gatsby_deployment_id=$(cat gatsby_deployment); then
  echo "Deployment ID was not found" 1>&2
  exit 3
fi


if [ "$1" = "error" ]; then
  curl -s \
    -X POST \
    -H "Authorization: bearer ${token}" \
    -d "{\"state\": \"error\", \"environment\": \"storybook\"" \
    -H "Content-Type: application/json" \
    "https://api.github.com/repos/${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}/deployments/${gatsby_deployment_id}/statuses"
  exit 1
fi

if ! netlify_deployment_url=$(./node_modules/.bin/netlify deploy --json --site $NETLIFY_SITE_ID_STAGING --auth $NETLIFY_ACCESS_TOKEN --dir=public | jq '.deploy_url'); then
  echo "Netlify preview deployment failed"
  exit 1
fi

echo ${netlify_deployment_url}

if ! gatsby_deployment=$(curl -s \
                  -X POST \
                  -H "Authorization: bearer ${token}" \
                  -d "{\"state\": \"success\", \"description\": \"deployed on Netlify\", \"environment\": \"gatsby\", \"environment_url\": ${netlify_deployment_url}, \"target_url\": ${netlify_deployment_url}, \"log_url\": ${netlify_deployment_url}}" \
                  -H "Content-Type: application/json" \
                  "https://api.github.com/repos/${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}/deployments/${gatsby_deployment_id}/statuses"); then
  echo "POSTing deployment status failed, exiting (not failing build)" 1>&2
  exit 1
fi
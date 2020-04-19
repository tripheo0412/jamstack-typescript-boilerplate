#!/bin/bash

set -eu

packages=$(ls -l ./src/pages | grep ^d | awk '{print $9}')
echo "Searching for pages build by Gatsby"
echo "All packages: ${packages}"

for package in ${packages[@]}
do
  path=$(jq ".ci.collect.url += [\"http://localhost/${package}\"]" lighthouserc.json|sponge lighthouserc.json)
  echo "${path}"
done





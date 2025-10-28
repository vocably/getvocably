#!/usr/bin/env bash

language="$1"

[ -z "$language" ] && {
  echo "Missing language" >&2
  exit 1
}

aws s3 sync batch-analyse/cache/$language/analyze/$language s3://vocably-prod-units-of-speech/analyze/$language

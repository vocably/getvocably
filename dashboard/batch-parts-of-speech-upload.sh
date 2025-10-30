#!/usr/bin/env bash

language="$1"

[ -z "$language" ] && {
  echo "Missing language" >&2
  exit 1
}

aws s3 sync cache-batch-analyse/glossa/parts-of-speech/$language s3://vocably-prod-units-of-speech/parts-of-speech/$language

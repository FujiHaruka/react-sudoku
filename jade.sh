#!/bin/sh

cd `dirname $0`

for jade_file in `\find jade -maxdepth 1 -name '*.jade'`; do
  jade_name=`basename $jade_file .jade`
  echo ${jade_name}.html
  jade $jade_file \
  --obj jade/json/$jade_name.json \
  --out static \
  --pretty
done

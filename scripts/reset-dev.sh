#!/bin/sh

set -eu

rm -rf node_modules .next
npm install
npm run build
npm run dev

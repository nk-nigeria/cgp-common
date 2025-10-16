#!/bin/bash

PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts_proto"
PROTOC_OUT_DIR="./ts"

mkdir -p ${PROTOC_OUT_DIR}

protoc \
  --plugin="protoc-gen-ts_proto=${PROTOC_GEN_TS_PATH}" \
  --ts_proto_out="${PROTOC_OUT_DIR}" \
  proto/lottery.proto

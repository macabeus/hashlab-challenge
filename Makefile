compile-proto:
	grpc_tools_node_protoc --js_out=import_style=commonjs,binary:products/proto --grpc_out=products/proto --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` -I proto/ proto/discount.proto
	protoc --plugin=protoc-gen-ts=proto/node_modules/.bin/protoc-gen-ts --ts_out=products proto/discount.proto
	python -m grpc_tools.protoc -I. --python_out=discount --grpc_python_out=discount proto/discount.proto

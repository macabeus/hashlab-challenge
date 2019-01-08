up:
	docker-compose up -d products_transpiler
	docker-compose up -d products_server
	docker-compose up -d discount_server

stop:
	docker-compose stop products_transpiler
	docker-compose stop products_server
	docker-compose stop discount_server
	docker-compose stop localstack

compile-proto:
	grpc_tools_node_protoc --js_out=import_style=commonjs,binary:products/proto --grpc_out=products/proto --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` -I proto/ proto/discount.proto
	protoc --plugin=protoc-gen-ts=proto/node_modules/.bin/protoc-gen-ts --ts_out=products proto/discount.proto
	python -m grpc_tools.protoc -I. --python_out=discount --grpc_python_out=discount proto/discount.proto

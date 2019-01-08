<img src="https://avatars2.githubusercontent.com/u/24793433?s=200&v=4" width="127px" height="127px" align="left"/>

# hashlab-challenge

Implementação do [desafio de backend](https://github.com/hashlab/hiring/tree/5d9c767101f2fa7021155930839fb790e0451f7e) para a [Hashlab](https://www.hash.com.br/). Resumidamente, deve-se construir dois microservices que se comunicam por gRPC, da qual um serviço é responsável pela listagem de produtos (Products) e o outro pelo desconto customizado por produto (Discount).

O serviço Products precisa ser resilitente, agindo do seguinte modo em caso de falha no Discount:
- se o Discount estiver indisponível, o Products deve continuar podendo listar os produtos, mas sem aplicar os descontos;
- se o Products for listar os produtos A, B e C e, ao tentar obter o desconto customizado desses produtos, o do B falhar, ainda deve listar todos os produtos, com o A e C tendo desconto e o B não.

Além disso, deve-se armazenar os produtos e usuário em um banco de dados. Para facilitar, eu optei em usar um banco de dados compartilhado entre os dois microservices.

As regras de descontos são:
- se for aniversário do usuário, deve-se conceder 5% de desconto
- se for blackfriday (nesse exemplo, fixada em 25/11/2019), deve-se conseder 10% de desconto
- desconto deve ser limitado em até 10%

# Executando

## Como rodar o projeto

Pode usar o seguinte comando do Makefile para subir todos os serviços:

```
make up
```

Em seguida, para popular o banco de dados, use:

```
docker-compose run --rm database_seed
```

Desse modo, a listagem de produtos estará acessível a partir da url `http://localhost:3000/product`. Opcionalmente, pode-se passar um id de usuário definindo no header `X-USER-ID`.

De forma análoga, para parar todos os serviços pode usar o seguinte comando:

```
make stop
```

## Simulando falhas

Tal como descrito nos requisitos do projeto, o Products precisa ser resilitente. Mesmo em cenários de falhas no Discount, ele ainda precisa listar os produtos. No caso, temos dois cenários para simular:

### Discount fora do ar

Pode-se apenas deixar de subir o service `discount_server` ou derrubá-lo, para assim simular um cenário em que o Discount caiu. Para derrubar esse service, use o seguinte comando:

```
docker-compose stop discount_server
```

### Intermitência

Caso queria simular um cenário em que falha ao tentar o desconto de alguns produtos, basta setar a flag na envrionment variable `DISCOUNT_SERVER_INTERMITTENT` e subir novamente o service `discount_server`:

```
export DISCOUNT_SERVER_INTERMITTENT=1
docker-compose up discount_server
```

Desse modo, produtos com ID par retornarão erro ao tentar obter o desconto, e assim não terão o desconto aplicado.

## Como rodar os testes e linter

Testes do Products:

```
docker-compose run products_test_unit
docker-compose run products_test_functional
```

Lint no Products:

```
docker-compose run products_lint
```

Test do Discount:

```
docker-compose run discount_test
```

Lint no Discount:

```
docker-compose run discount_lint
```

## Como compilar os .proto

Caso precise mudar a interface de comunicação entre os dois serviços, será necessário atualizar o arquivo `proto/discount.proto` e, sem seguida, compilá-lo novamente.

Para compilar, precisa ter instalado em seu sistema o [`protobuf-compiler`](https://packages.debian.org/sid/protobuf-compiler), pacote do Python [`grpc_tools`](https://pypi.org/project/grpcio-tools/), e o pacote do NPM [`grpc-tools`](https://www.npmjs.com/package/grpc-tools) ([ver issue #5](https://github.com/macabeus/hashlab-challenge/issues/5)).

Instalar essas dependências (usando como exemplo Ubuntu):

```
sudo apt-get install protobuf-compiler
python -m pip install grpcio-tools
npm install -g grpc-tools
```

Instale as dependências do `proto`:

```
cd proto
npm i
```

E por fim, para compilar execute na raiz do projeto:

```
make compile-proto
```

Pronto! Agora já pode utilizar as novas definições do `.proto`!

# Escolha da Stack

## Linguagens

Um dos requisitos do projeto é que os microservices usem linguagens diferentes. Assim, optei em usar TypeScript no Products e Python no Discount. Como os serviços são simples e tem um escopo bem reduzido, não vejo necessidade de usar uma linguagem que enforce muito em como deve-se programar, me dando mais liberdade no desenvolvimento e foco em implementar a regra de negócio da aplicação.

Além disso, há boas implementações de gRPC e integração com o DynamoDB tanto para TypeScript como para Python, o que facilita o desenvolvimento. E com TypeScript consigo obter uns dos benefícios do gRPC, que são os parâmetros tipificados.

## Infra

Como esse projeto é bem simples, a primeira ideia que me veio em mente para o deploy seria utilizar um serviço igualmente simples de se usar, como o Now ou Heroku, porem, tanto o [Now](https://spectrum.chat/zeit/general/grpc-service-returning-520-origin-error~c3a28953-c7f1-43b1-af4e-b4327a6d7d3e) como [Heroku](https://devcenter.heroku.com/articles/http-routing#http-versions-supported) não apresentam suporte para gRPC.

Assim me restou utilizar um IaaS para se deployar a aplicacao, que no caso seria a AWS, por ter mais experiência. Como toda a aplicação estar dockerizada, se fosse realizar o deploy, a ideia mais simples que me vem em mente seria utilizar o Fargate.

## Banco de dados

As consultas a serem feitas nessa aplicação são simples: obter um usuário com base no ID e listar todos os produtos. Além disso, não há um relacionamento entre essas duas entidades. Desse modo, um banco orientado a documentos me pareceu ser uma boa abordagem para essa aplicação. E já que estava em planos usar a AWS, o DynamoDB se encaixa bem, me abstraindo mais a respeito de como escalar e subir esse banco, e ele consegue performar bem nas consultas que essa aplicação visa realizar.

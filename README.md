# Proposta de Microservices com API Gateway, Lambda, Node.js, Express e DynamoDB
 [![Build Status](https://travis-ci.org/jonatassaraiva/microservice-serverless-lambda-nodejs.svg?branch=master)](https://travis-ci.org/jonatassaraiva/microservice-serverless-lambda-nodejs) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/3a65e9a489d444569fccacc34ea3707c)](https://www.codacy.com/app/jonatassaraiva/microservice-serverless-lambda-nodejs?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=jonatassaraiva/microservice-serverless-lambda-nodejs&amp;utm_campaign=Badge_Grade) [![Codacy Badge](https://api.codacy.com/project/badge/Coverage/3a65e9a489d444569fccacc34ea3707c)](https://www.codacy.com/app/jonatassaraiva/microservice-serverless-lambda-nodejs?utm_source=github.com&utm_medium=referral&utm_content=jonatassaraiva/microservice-serverless-lambda-nodejs&utm_campaign=Badge_Coverage)

## O que é um microservice?
Se pesquisarmos por "O que é um microservice?" vamos encontrar muitos artigos que fornecem seus próprios pontos de vista e definições. No entanto, a maioria das características são:
* Um microservice é focado em resolver um único problema
* Desenvolvido por uma pequena equipe
* Escrito em qualquer linguagem, no meu caso Node.js ;)
* Permanece consistente e disponível na presença de falhas
* Interagem com outros microsserviços em protocolos e interfaces bem definidos
* Permite que o código e seu estado tenham versões, implantação e dimensionamento independentes

Seguindo estas característica, este repositório apresenta um proposta de microservice usando uma arquitetura serverless com os recursos de nuvem AWS. 

O problema a ser resolvido é um microservice pra Notes.

## Instalação
1. Node.js (https://nodejs.org/en/)

2. Clonar o repositódio 

* ``` git clone https://github.com/jonatassaraiva/microservice-serverless-lambda-nodejs.git ```

3. Acessar o repositório 

* ``` cd  microservice-serverless-lambda-nodejs ```

4. Instalar as dependência 

* ``` npm install ```

5. Instalar Serverless Framework, um toolkit para deploy e operação para aplicações sem servidor

* ``` npm install serverless -g ```

6. Deploy. Substituir os valores *<value>*

* ``` AWS_ACCESS_KEY_ID=<value> AWS_SECRET_ACCESS_KEY=<value> AWS_REGION=<value> sls deploy ```

## Rodando local
1. Executar os passos de 1 a 4 do item acima

2. Criar o arquivo com as variáveis de ambiente

* ``` touch .env ```

3. Adicionar ao arquivo .env as variáveis
* AWS_ACCESS_KEY_ID=
* AWS_SECRET_ACCESS_KEY=
* AWS_REGION=
* ENABLE_LOG_ERROR=true

4. Executar o microservice

* ``` node scripts/run-mode-debug.js ```

5. Executar testes de integração. Em minha opinião, este tipo de testes agregam mais valor aos microservices.

* ``` npm run test ```

## Integração contínua
Para integração contínua rodando lint, testes e deploy estou usando o serviço Travis. (https://travis-ci.org)

## IDE
Um dos melhores editores para node.js é o VSCODE (https://code.visualstudio.com/)
Após a instalação, é possível debugar o projeto. Basta abrir o projeto na IDE e pressionar **F5** 

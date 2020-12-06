# TesteLett
Teste admissional Lett.

## Sobre o projeto
Este projeto é um simples web server que recebe uma url de qualquer produto do site da Magazine Luiza e retorna um json contendo o preço, disponibilidade, url da imagem do produto e o seu nome.

## Testando o projeto

Para testar é simples. Basta clonar o repositório e subir o server para iniciar os testes.

**Clonando o repositório**

```
$ git clone https://github.com/CostaLucasIV/TesteLett

$ cd TesteLett
```

**Instalando as dependências**

```
$ npm install
```

**Iniciando o server**

```
$ npm start
```
Com o server online, basta acessar http://localhost:3000/status para receber o status do servidor. Para testar a rota /scrap_product, faça um post na url http://localhost:3000/scrap_product e envie no corpo da requisição o parâmetro "url" contendo a url do produto desejado (utilizei o Postman para testar as requisições).

**Tecnologias utilizadas**
- [Node](https://nodejs.org/) - Node e Npm
- [Express](https://expressjs.com/pt-br/): Web server
- [Axios](https://www.npmjs.com/package/axios): Cliente HTTP para requisições
- [Body-parser](https://www.npmjs.com/package/body-parser): Middleware para parse das requisições

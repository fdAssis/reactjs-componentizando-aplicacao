<h2 align="center">
  Componentizando a aplicação
</h2>

<div align="center">
  <img src="https://res.cloudinary.com/dorzadlpq/image/upload/v1633895456/Github/reactjs/fakeflix_im41gb.png" width=50%/>
</div>

## :computer: Aplicação

<p>
Essa é uma aplicação onde o principal objetivo é uma página para listagem de filmes de acordo com gênero.

- A aplicação possui apenas uma funcionalidade principal que é a listagem de filmes
- Na sidebar é possível selecionar qual categoria de filmes deve ser listada
- A primeira categoria da lista (que é "Ação") já deve começar como marcada
- O header da aplicação possui apenas o nome da categoria selecionada que deve mudar dinamicamente.
</p>

## :robot: Fake API com JSON Server
<p>
 Essa aplicação utilizar o JSON Server para simular uma API que possui as informações de gêneros e filmes. 

 Navegue até a pasta criada, abra no Visual Studio Code e execute os seguintes comandos no terminal:
 ```
  yarn
  yarn server
 ```
 Feito isso iniciarar uma fake API com os recursos `/genres` e `/movies` em `localhost` na porta `3333` a partir das informações do arquivo server.json 
 localizado na raiz do projeto.
 
 Dessa forma, basta consumir essas rotas da API normalmente com o Axios. Caso queira estudar mais sobre o JSON Server, dê uma olhada aqui:
 Json Server **[typicode/json-server](https://github.com/typicode/json-server)**.
</p>

## :zap: Resultado
<img src="https://res.cloudinary.com/dorzadlpq/image/upload/v1633898343/Github/reactjs/fakeflixx_yj4tgy.gif" width=100%/>

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
 
 Acessando essas rotas no navegador, você consegue ver o retorno das informações já em JSON:
  
  `localhost:3333/genres`
   ```JSON
     [
      {
        "id": 1,
        "name": "action",
        "title": "Ação"
      },
      {
        "id": 2,
        "name": "comedy",
        "title": "Comédia"
      },
      {
        "id": 3,
        "name": "documentary",
        "title": "Documentário"
      }
    ]
   ```

  `localhost:3333/movies`
  ```JSON
    [
      {
        "Genre_id": 1,
        "Title": "Underdog",
        "Year": "2007",
        "Rated": "PG",
        "Released": "03 Aug 2007",
        "Runtime": "84 min",
        "Genre": "Action, Adventure, Comedy, Family, Fantasy, Sci-Fi",
        "Director": "Frederik Du Chau",
        "Writer": "Adam Rifkin (screenplay), Joe Piscatella (screenplay), Craig A. Williams (screenplay), Joe Piscatella (story), Craig A. Williams (story), Adam           Rifkin (story), W. Watts Biggers (television series)",
        "Actors": "Jason Lee, Peter Dinklage, Jim Belushi, Patrick Warburton",
        "Plot": "A Beagle must use his newly-bestowed superpowers to defend Capitol City from mad scientist Simon Barsinister.",
        "Language": "English",
        "Country": "USA",
        "Awards": "3 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTk5NjkyNzEwOV5BMl5BanBnXkFtZTcwODc5NDI1MQ@@._V1_SX300.jpg",
        "Ratings": [
          {
            "Source": "Internet Movie Database",
            "Value": "10/10"
          },
          {
            "Source": "Rotten Tomatoes",
            "Value": "16%"
          },
          {
            "Source": "Metacritic",
            "Value": "37/100"
          }
        ],
        "Metascore": "37",
        "imdbRating": "4.7",
        "imdbVotes": "19,729",
        "imdbID": "tt0467110",
        "Type": "movie",
        "DVD": "08 Jul 2016",
        "BoxOffice": "$43,760,605",
        "Production": "Spyglass Entertainment",
        "Website": "N/A",
        "Response": "True"
      }
  ```
 
 Dessa forma, basta consumir essas rotas da API normalmente com o Axios. Caso queira estudar mais sobre o JSON Server, dê uma olhada aqui:
 Json Server **[typicode/json-server](https://github.com/typicode/json-server)**.
</p>

## :zap: Resultado
<img src="https://res.cloudinary.com/dorzadlpq/image/upload/v1635002007/Github/reactjs/fakeflix2_ej7pg2.gif" width=100%/>

<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

# Utilizando Markers, Drag e Click events com Google Maps em projetos Angular

Nessa aula iremos implementar o Google Maps em nossa aplicação Angular para que seja possível listar todos os alunos recuperados através de uma requisição GET.
Além disso, aprenderemos também a utilizar alguns eventos como Drag (Arrastar) e Click (Clicar no mapa e no Marker) para poder cadastrar um novo aluno e editar suas informações.

- [Template utilizado na aula](https://github.com/rocketseat-experts-club/angular-google-maps-2021-10-16/tree/template)

## Tecnologias

- [Angular](https://angular.io/)
- [Node](https://nodejs.org/en/)

## Links úteis

- [Angular CLI](https://angular.io/cli)
    - [new](https://angular.io/cli/new)
    - [generate](https://angular.io/cli/generate)
- [NG Bootstrap](https://ng-bootstrap.github.io/#/home)
- [Font Awesome](https://fontawesome.com)
- [RxJS](https://rxjs.dev/guide/operators#creation-operators)
- [Angular Google Maps](https://github.com/angular/components/tree/master/src/google-maps#readme)

## Ambiente, recursos e requisitos necessários

- Node 14.17.5 (LTS);
- Seu editor de código de preferência (No meu caso, Visual Studio Code);
- Familiaridade com HTML, CSS e JavaScript;
- Vontade de aprender :D

## Comandos utilizados
- npm install @angular/google-maps
- ng generate component features/students/student-map

## Configuração

### API Key do Google Maps
Caso você esteja desenvolvendo sua própria aplicação para estudo, após a instalação do google-maps ```npm install --save @angular/google-maps```, é necessário adicionar a importação do script do **GoogleMaps API** dentro da tag ```<head></head>``` no arquivo **index.html**.

```
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
```

OBS: Onde esta YOUR_API_KEY, substitua pela sua chave de acesso.

Não sabe como criar sua chave de acesso? Clique no seguinte link: [criando uma API key](https://developers.google.com/maps/documentation/javascript/adding-a-google-map#step_3_get_an_api_key)

## Testando a aplicação
- Clone o repositório para a sua máquina
- Abra um terminal na pasta principal da aplicação
- Instale todas as dependências da aplicação utilizando o seguinte comando:
    ```
    npm install
    ```
- Antes de inicializar nossa aplicação, é necessário subir nossa fake API (Back-end server):
    ```
    npm run server
    ```
- Para rodar a aplicação, execute o comando:
    ```
    npm start
    ```
- Abra o seu browser na seguinte URL: http://localhost:4200

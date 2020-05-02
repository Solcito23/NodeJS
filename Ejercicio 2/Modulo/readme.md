# Api Noticias de todo el mundo

_Modulo de node que consulta la api 'newsAPI'_

## Instalación 
```
> npm i api-news
```

## Limitación

_La api tiene un limite de 50 consultas diarias y devuelve un total de 34 noticias._

## Especificaciones

### apiNews.getCategories() 

_Devuelve las posibles categorias que nos permitiran buscar el tipo de noticia que queremos ver._ 

```
[ { id: '', description: 'Todos' },
  { id: 'science', description: 'Ciencia' },
  { id: 'sports', description: 'Deportes' },
  { id: 'business', description: 'Economia' },
  { id: 'entertainment', description: 'Entretenimiento' },
  { id: 'health', description: 'Salud' },
  { id: 'technology', description: 'Tecnología' } ]

  ```


### apiNews.getCountries() 

_Devuelve los paises por los cuales podemos obtener sus noticias._ 

```
[ { id: '', description: 'Todos' },
  { id: 'ar', description: 'Argentin' },
  { id: 'br', description: 'Brasil' },
  { id: 'ca', description: 'Canada' },
  { id: 'co', description: 'Colombia' },
  { id: 'us', description: 'Estados Unidos' },
  { id: 'it', description: 'Italia' } ]

  ```


### apiNews.getLanguages() 

_Devuelve los idiomas en los cuales podemos traducir las noticias._ 

```
[ { id: '', description: 'Todos' },
  { id: 'ar', description: 'Arabe' },
  { id: 'en', description: 'Inglés' },
  { id: 'es', description: 'Español' },
  { id: 'it', description: 'Italiano' },
  { id: 'ru', description: 'Ruso' },
  { id: 'pt', description: 'Portugues' } ]

  ```

### apiNews.getNews(country, language, category) 
  _Se debe especificar al menos uno de los parametros._ 

```
{ status: 'ok',
  totalResults: 34,
  articles:
   [ { source: [Object],
       author: 'Adrián Pallares',
       title: 'Juana Viale grabó el programa de Mirtha Legrand emocionada por la muerte de Goldy: el pedido puntual que le hi - infobae',
       description: 'Si bien el ciclo se verá esta noche, se grabó al mediodía. Y Teleshow tuvo acceso a la intimidad de una jornada muy especial',
       url: 'https://www.infobae.com/teleshow/infoshow/2020/05/02/juana-viale-grabo-el-programa-de-mirtha-legrand-emocionada-por-la-muerte-de-goldy-el-pedido-puntual-que-le-hizo-chiquita-y-el-noble-gesto-de-adrian-suar/',
       urlToImage: 'https://www.infobae.com/new-resizer/g2VRNPruUb5Kk4eExH2a79UNnNI=/1200x0/filters:quality(100)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/MUICXRDJLBHGHETOH3O5UD5DU4.jpg',
       publishedAt: '2020-05-02T20:21:39Z',
       content: 'Minutos después del mediodía, los restos de Goldy Legrand eran enterrados en un cementerio privado de Pilar con solo cuatro testigos: su yerno, uno de sus nietos y dos empleados de la cochería. Rato más tarde -a las 12:45, para ser precisos- en los estudios d… [+4016 chars]' }]

  ```
# Proyecto del Curso ReactJS CoderHouse

En este repositorio se encuentre el código fuente del proyecto de ReactJS de CoderHouse, comisión 34680.

## Objetivo
El objetivo de esta webapp es la de simular un ecommerce de artículos de cultura popular japonesa, tales como:
* Modelos de plástico del anime Gundam.
* Manga.
* Figuras a escala de personajes de anime.

Durante el desarrollo de esta webapp de ecommerce se practicaron los conceptos fundamentales de React como es el diseño basado en componentes y la reutilización de estos.
La base de datos donde se esta almacenando toda la información de los productos que se ofrecen en el ecommerce es una Realtime Database de Firebase.
Para consultar la lista de productos:
https://mafty-shop-default-rtdb.firebaseio.com/productos.json
En la app, se implemento Firestore con su respectiva conexion a traves de Firebase como la database de la app.

## Desarrollo

La webapp fue desarrollada utilizando el framework de JS, ReactJS.

Los temas vistos en el curso y aplicados en el desarrollo de la webapp son los siguientes:

* JSX.
* Diseño basado en componentes.
* Componentes Funcionales.
* Separación de responsabilidades por medio de componentes lógicos y de presentación.
* Uso de Hooks, useState, useEffect de React.
* Llamadas asincrónicas por medio de fetch().
* Navegación de la aplicación utilizando BrowerRouter, Routes, Route y hook useParams de la librería react-router-dom.

**Librerías**

React Bootstrap

Aparte de las dependencias vistas en clase, react y react router dom, decidí agregar a mi proyecto la librería react-bootstrap para el apartado visual de la aplicación, debido a su fácil implementación y los estilos responsive que este framework ofrece.

React Router

Permite facilitar la navegacion y el enrutamiento de la aplicacion con rutas intuitivas definidas por el desarrollador.
Cada item tiene su ruta, asi como cada categoria.

Firebase

Permite conectar la app directamente a la base de datos almacenada en el Firestore de Firebase. 

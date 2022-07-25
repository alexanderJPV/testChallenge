
# ✨ Project

Web App for SED band rock

## 📋 Tecnologies
 - `node express framework`
## 📋 Pre-requisitos
 - `node v16.16.0` o superior
 - `mysql`
 ```
   create hotel databases
 ```
## 🔭 Copy repository and installation
_Copia del repositorio **GITLAB** del proyecto en funcionamiento en tu máquina local._
 - `Clone the repo`
 ```
   git clone https://github.com/alexanderJPV/testChallenge.git
  ```
 - `project path`
 ```
    cd /project
 ```
 - `Install NPM packages`
 ```
    npm install
 ```
## 🔧 Runing
- `Comand to run serve`
```
npm run start
```
- `Comand to migrate data fake`
```
npm run migrateRake
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
## 🚀 Deploy Despliegue App
- `Comando to build React App`
```
npm build
```

Builds the React app for production to the `build` folder.\

## Preview
Insert here an image of the preview if your project has one. The image can be into the project, you have to indicate the route and look like this.
* [Express](https://expressjs.com/) - El framework usado

## Resources folder tree

```
/src
   /controllers
   /helpers
   /migration
   /models
   /routes
DBConfig.js
index.js
```
## Activities Diagram and flowchart
Explains all entyties, flows and activities
* Entity cliente(client)
* Entity reserva(reserve)
* Entity habitacion(room)
* Entity pago(payment)
* Entity factura

![](/flujo.jpg)
## End-points
<ol>
   <li>
      <p>End-poinds cliente(client).</p>
      <h4>CRUD: En el analisis y diseño "Cliente" es el actor principal su funcion es el solicitante de una reserva. Los end-points siguientes hacen posible que el backend segun la arquitecura API RESTFULL.<br>
      Realize: Create-Read-Update-Delete de un regitro Cliente<br>
      Paginado: Todo endpoint de tipo GET incluye paginacion.
      </h4>
      <blockquote>
         <span>**GET**</span><p> http://localhost:3000/api/clients</p>
         <span>**POST**</span>
         <p> http://localhost:3000/api/clients</p>
         <span>**PUT**</span>
         <p> http://localhost:3000/api/clients</p>
         <span>**GET ONE**</span>
         <p> http://localhost:3000/api/clients/:id</p>
         <span>**DELETE**</span>
         <p> http://localhost:3000/api/clients/:id</p>
      </blockquote>
      <h4>OTHERS: Adiciones funciones extras a CRUD.<br>
          Search: Busqueda de un registro cliente con critero de (FirstName, Lastname, ci, email)
      </h4>
      <blockquote>
         <span>**GET SEARCH**</span>
         <p> http://localhost:3000/api/clients-search/?keyword=something</p>
      </blockquote>
   </li>
   <li>
      <p>End-poinds Habitacion(room).</p>
      <blockquote>
         <p> A block quote. </p>
      </blockquote>
   </li>
   <li>
      <p>End-poinds Reserve(reserva).</p>
      <blockquote>
         <p> A block quote. </p>
      </blockquote>
   </li>
   <li>
      <p>End-poinds Payment(pago).</p>
      <blockquote>
         <p> A block quote. </p>
      </blockquote>
   </li>
   <li>
      <p>End-poinds Factura.</p>
      <blockquote>
         <p> A block quote. </p>
      </blockquote>
   </li>
</ol>

## 🛠️ Construido con

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Express](https://expressjs.com/) - El framework usado

## 🖇️ Contribuyendo

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## 📖 Wiki

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)

## 📌 Versionado

Usamos [MVN](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## ✒️ Autores

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Alexander Perez** - *Trabajo Inicial and Documentación* - [fulanitodetal](#fulanito-de-tal)

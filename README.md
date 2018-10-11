# react-bibam-group

#### Tener instalado Node js. Versión - 10.8.0 -  o superior.
**https://nodejs.org/en/**

#### 1- Luego de descargar el repositorio de la app, ir a la carpeta "../telephasic-app" y ejecutar los siguientes comandos:

// Instalara los modulos necesarios para ejecutar la aplicación.

**npm install**

// Ejecutara el servidor que mostrara la pagina en el navegador predeterminado

**npm start**


# Estructura de archivos

### carpeta ../node_modules:
**Se encuentran los modulos de nodeJS que se instalan al generar una aplicación de react con el modulo [Create React App](https://github.com/facebook/create-react-app). Contiene una preconfiguración de modulos como Webpack y Babel.**

**Babel es un modulo que transpila el código de ES6 a ES5, ya que no todos los navegadores soportan ES6 aun. (Por ejemplo Internet Explorer)**

**También se instalo el modulo styled-components para react el cual otorga la capacidad de hacer hojas de estilos como si fueran componentes.**

### carpeta ../public/index.html:
**Se encuentra el archivo index.html donde react va a renderizar todo el proyecto dentro del div con id root.**

### carpeta ../src/ :
**Se encuentran los componentes creados de React.**

### carpeta ../src/index.js :
**Es el componente encargado de pasar lo que se va a renderizar en el div con id root que se encuentra en ../public/index.html**

### carpeta ../src/App.js :
**Este componente es donde se encuentran y se organizan el resto de componentes de la app (AppNavbar.js, Background.js, MainArea.js). Este componente es importado a index.js para ser renderizado en index.html**

### carpeta ../src/components :
**En esta carpeta se encuentran los componentes creados para la aplicación con la mayoría de la lógica.**

### carpeta ../src/components/layout/AppNavBar.js :
**Este componente se encarga de la navbar del sitio. Contiene el estilo de la misma y recibe los items que se encuentran en esta de otro componente ( AppNavItem.js )**

### carpeta ../src/components/layout/AppNavItem.js :
**Este componente contiene los items que estan dentro de la navbar junto a su estilo y la lógica para la selección de cada uno. Se le pasa por propiedad un parametro para saber si el item está activo o no y se muestra el correspondiente estilo según su estado.**

### carpeta ../src/components/layout/Background.js :
**Este componente se encarga de crear el background de la página que fue construido con css. Proveyendo los colores y gradientes necesarios para que se muestren lo mas fiel posible a la foto del ejercicio.
Se hizo uso del modulo 'styled-components' de react para generar las hojas de estilos. Se uso ThemeProvider (modulo de styled-components) para el uso de variales en la hoja de estilos y poder hacer dinámicas las mismas.**

### carpeta ../src/components/styles/colorVars.js :
**Este componente sin estado se crea para agregar los colores de estilos que se usan en el proyecto a variables. Es buena practica para proyectos grandes donde hay que mantener una buena organización.**

### carpeta ../src/components/MainArea.js :
**Este componente se encarga de mostrar los datos que se muestran en el frente de la página junto a estilo que lleva. Y contiene el componente que genera el boton en el frente.** 

### carpeta ../src/components/Button.js :
**Este componente se encarga del estilo del boton de la pagina principal. El valor del texto es pasado por propiedad desde el componente que esté utilizando el boton. Así se asegura la reutilización del mismo en otras areas de la página.**

## Curency Bird Challenge

# Dependencias
La única dependencia para este proyecto es tener instalado alguna versión de Node. Para este proyecto se usa la siguiente:
- Node v17.2.0 (https://nodejs.org/es/).
- Git.

# Estructura
```
currencybird-challenge
│   README.md   
└───currencybird-back
└───currencybird-client
```
# Ejecución

En primer lugar, clonar el repositorio con:
```
git clone https://github.com/RaimundoVU/currencybird-challenge.git 
```

Es recomendable para ejecutar este proyecto tener dos pestañas de terminal abiertas en la carpeta raíz del proyecto. 

Para el frontend en una de las dos pestañas de la terminal, se deben ejecutar los siguientes comandos:
```
cd currencybird-client
npm install
npm start
```

Para el backend, en la siguiente pestaña de la terminal: 
```
cd currency-back
npm install
node index.js
```

No hay que preocuparse de la base de datos, ya que se utiliza una base de datos en la nube de MongoDB Atlas.

Cabe destacar que el comando `npm install` podría tardar unos minutos ( tanto front como back).

# Solución

Para mi solución se asume que en la vista inicial para generar los enlaces, se ingresa un email ya registrado, en caso de no exisistir el usuario se genera un enlace para registrarse, sin darle dinero por referidos a ningun usuario. En caso de existir, se autocompleta el input de nombre completo y se envia la request para obtener el enlace de referido.

# Usuarios de prueba.

Existen 3 usuarios de prueba en la aplicación ( se pueden crear mas obviamente, registrandose o usando el enlace de referidos), que son los siguientes:

```
Usuario 1: 
email: pedrojorequera@ejemplo.com

Usuario 2: 
email: carmensalazar@ejemplo.com

Usuario 3:
email: aliciarubio@ejemplo.com
```

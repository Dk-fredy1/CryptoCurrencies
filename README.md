# CryptoCurrencies

Solución del reto el cuál es un wrapper de CoinGecko

- - - -

- [Crypto Currencies](#cryptocurrencies)
- [Instalación](#instalación)
  - [Paquetes instalados de forma global](#paquetes-instalados-de-forma-global)
  - [Prerequisitos para iniciar el proyecto](#prerequisitos-para-iniciar-el-proyecto)
  - [Pasos para ejecutar el proyecto](#pasos-para-ejecutar-el-proyecto)
    - [1 Instalar dependencias](#1-instalar-dependencias)
    - [2 Configurar variables de entorno](#2-configurar-variables-de-entorno)
    - [3 Ejecutar las migraciones](#3-ejecutar-las-migraciones)
    - [4 Ejecutar los seed](#4-ejecutar-los-seed)
    - [5 Ejecutar el proyecto](#5-ejecutar-el-proyecto)
- [Ejecutar las pruebas unitarias](#ejecutar-las-pruebas-unitarias)
- [Swagger](#swagger)

# Instalación
## Paquetes instalados de forma global

- Eslint
- nodemon
- sequelize-cli

## Prerequisitos para iniciar el proyecto
- Tener instalado MySQL
- Tener un esquema para el proyecto
- Tener node v12.15.0 o superior
## Pasos para ejecutar el proyecto

### 1 Instalar dependencias
Ejecutar el comando: `npm install`

### 2 Configurar variables de entorno
Renombrar el archivo `.env.example` por `.env` y configurar las variables de entorno de las bases de datos y el secreto para firmar los tokens

### 3 Ejecutar las migraciones
Ejecutar el siguiente script de NPM: `npm run migrations`

### 4 Ejecutar el proyecto
Ejecutar los siguientes comandos:
Para entornos productivos: `npm start`
Para desarrollo `npm run start-dev`

# Ejecutar las pruebas unitarias
Para ejecutar las pruebas unitarias y generar la covertura se puede ejecutar el siguiente comando:
`npm test`

# Swagger
La documentación se encuentra en el endpoint `{server}/docs`
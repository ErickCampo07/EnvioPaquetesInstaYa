# Envio de paquetes InterVeloz
La empresa InstaYA requiere un sistema por medio del cual los usuarios puedan programar la recogida de paquetes para su futuro envío.
Los datos mínimos que requiere la empresa por parte del usuario para recoger el paquete son los siguientes:

Dia y franja horaria en la cual se encuentra disponible el usuario para atender al personal encargado (Se debe programar con mínimo 24 horas de anticipación).
1. Las dimensiones ancho x alto x largo, si es mercancía delicada o no y el peso aproximado.
2. Dirección del lugar de recogida, incluyendo ciudad.
3. Número de identificación personal y nombre completo de quien envía.
4. Dirección del lugar hacia donde se realiza el envío, incluyendo ciudad, así como el número de identificación personal y nombre completo de quien recibe.

Deben tener en cuenta las siguientes funcionalidades:

- Solo se maneja el usuario cliente, quien es el que realizará la solicitud del servicio.
- Por cada envío se genera un código único de seguimiento.
- Un envío puede tener tres posibles estados: Guardado (al crearse), Cancelado o Cumplido.
- Los envíos automáticamente se cumplen en 24 horas.

> **Notas:**
> 1. Los datos suministrados por los usuarios deben cumplir la política de privacidad de datos vigente, es decir las contraseñas de los usuarios deben almacenarse de forma cifrada y la conexión al servidor debe realizarse de forma segura.
> 2. La base de datos debe ser no relacional. (MongoDB)
> 3. Se debe utilizar una arquitectura desacoplada, es decir, una API back end y un front end que consuma dicha API.
> 4. La API back end debe estar desarrollada en Express.js
> 5. El front end debe estar desarrollado en React.js
> 6. Se debe utilizar Bootstrap como librería CSS  para manejar los estilos de su aplicación.

# Planificación de proyecto

## 1. Definición de roles

|ROL  |NOMBRE  |ESPECIALIDAD |
|-- | -- | -- |
|DEVELOPMENT TEAM |ERICK CAMPO |BACKEND - CONTROL DE VERSIONES - DESARROLLADOR NODE.JS|
|DEVELOPMENT TEAM |JESÚS CARDONA |BACKEND - BASE DE DATOS - DESARROLLADOR NODE.JS|
|DEVELOPMENT TEAM | YENNY CASTILLO |FRONTEND - MAQUETADO - DESARROLLADOR HTML+CSS|
|DEVELOPMENT TEAM | AURA DUQUE | FRONTEND - DESARROLLADOR JAVASCRIPT|
|DEVELOPMENT TEAM | EDGAR DELGADO | FRONTEND - DESARROLLADOR JAVASCRIPT - TESTEO|


## 2. Definición de artefactos

### Sprint Backlog 1
1. Conformación de equipo y asignación de roles.
2. Delimitación de actividades de equipo de desarollo.
3. Levantamiento de historias de usuario (cliente).
4. Definición de despliegue de aplicativo web.
5. Cronograma de actividades**

### Sprint Backlog 2
1. Levantamiento de mockup y wireframe de la navegación del aplicativo web.
2. Elaboración de mapa de navegabilidad del sitio.
3. Creación de proyecto _**React.JS**_ para aplicativo web.
4. Selección de plantilla de estilos en _**Bootstrap**_.
5. Montaje de repositorio _**GitHub**_ para manejo de versiones.
6. Creación de ramas de trabajo `'-master'`, `'-frontend'`, `'-backend'`, `'-database'`

### Sprint Backlog 3
1. Definición y documentación de componentes _"interfaces", "herramientas", "liberarías"_.
2. Creación de formularios para entrada de datos de usuario con ayuda de _**HTML** + **CSS**_.
3. Simulación y documentación de peticiones API desde Frontend.
4. Manejo de bases de datos no relaciones con _**MongoDB**_.
5. Creación de nuevo proyecto en _**Node.js**_ para _Backend_.
7. Listado de dependencias útiles para desarrollo del proyecto según marco de trabajo.
6. Definición y documentación de módulos funcionales de I/O, autenticación y autorización de usuario.
8. Conectividad de base de datos desde Backend.

### Sprint Backlog 4
1. Documentación para información de despliegue de aplicativo web.
2. Instalar servicios para Backend y frontend según especificación de requerimientos.
3. Compilar y ejecutar pruebas de integración backend-frontend.
4. Realizar pruebas de despliegue de aplicación web.
5. Generar documentación de despliegue y entregables finales.


## 3. Stack de tecnolgías

- Comunidad y control de versiones: **GitHub.**
- Lenguaje de desarrollo: **Javascript**, **HTML** + **CSS**
- Frameworks utilizados: **React.Js**, **Express.Js**, **Bootstrap.**
- Base de datos no relacionales: **NoSQL**, **MongoDB.**
- Tipo de arquitectura de despliegue en la nube: **PaaS**.



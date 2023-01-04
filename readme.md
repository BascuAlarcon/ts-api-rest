tsc --init
npm init -y
npm i express cors dotenv multer mongoose
npm i @types/express @types/cors @types/dotenv @types/multer @types/mongoose -D (-d por que son dependencias de desarrollo)
bcryptjs
jsonwebtoken

Proceso de dev

1. me aseguro de las versiones
2. instalo las dependencias y sus tipados
3. creo la estructura de carpetas

estructuras

- la carpeta src/interfaces se usa en ts, es para darle definición a los datos (es como un contrato; no tiene lógica, es simplemente una definición)

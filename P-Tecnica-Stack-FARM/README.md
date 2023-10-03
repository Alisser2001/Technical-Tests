# Prueba Técnica Stack FARM

## Servidor

1. Desde el Shell en VSC, en el directorio /server del proyecto, iniciamos el entorno virtual de Anaconda:

       conda activate python-mongo

3. Desde otra consola, ejecutamos mongo en el entorno local:

       mongod

4. En VSC, desde la extensión de MongoDB, conectamos la base de datos que vamos a usar.

5. Iniciamos el servidor desde al administrador de puerta de enlace de servidor Uvicorn, en la misma consola donde inciamos el entorno virtual:

       uvicorn app:app --reload

## Cliente

1. Desde /client, instalamos los paquetes necesarios para su funcionamiento:

       npm i

2. Ejecutamos la aplicación:

       npm run dev

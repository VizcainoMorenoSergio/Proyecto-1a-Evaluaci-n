/*League of Legends es un juego MOBA donde un equipo de 5 personas se enfrenta a otro equipo de 5 personas donde gana 
el equipo que consiga destruir la base del equipo enemigo. Cada jugador selecciona un personaje de los + de 100 que existen
según el rol que hayan elegido y se sitúan en el mapa. El mapa es un cuadrado con una diagonal que lo atraviesa, los lados
y la diagonal son las líneas donde juegan los jugadores. Los lados izquierda y arriba pertenecen a la línea Superior, 
la diagonal de en medio, es la línea Central, los 2 lados restantes abajo y derecha forman la línea Inferior, y la zona 
delimitada dentro del cuadrado forma la Jungla. Cada línea tiene en su recorrido 3 Torres y un Inhibidor a defender hasta
llegar al Nexo (el núcleo y objetivo a destruir para ganar la partida). Cada jugador tiene un rol que se corresponde a cada 
línea, excepto en la línea inferior, que la forman  2 jugadores: el Inferior y el Apoyo. En este proyecto se utilizarán algunos de
los distintos personajes que existen en el videojuego*/

/*Quiero filtrar por roles, quiero que me muestre todos los Luchadores*/ 
db.Campeones.find(    
   {Rol: {$eq: "Luchador"}  }
)

/*Algunos Campeones han sufrido algún cambio al cabo del tiempo, quiero obtener aquellos que contengan el campo Rework*/
db.Campeones.find(
    {$exists: "Rework"}
)

/*Quiero saber qué campeones han sido los más jugados este último mes, así que pediré que el PR (Pick rate) sea mayor que: por ejemplo 10%*/
db.Campeones.find(
    {PR: {$gt: "10"}}
)


/* Quiero encontrar el nombre de un campeón que me dijo un amigo que debería probar, pero no recuerdo el nombre completo. Solo sé que empieza por Morde*/
db.Campeones.find(
    {Nombre: {$regex: /Morde$/}}


)

/*Quiero encontrar los campeones que no pertenezcan a una región determinada.*/
db.Campeones.find(
    {Región:{ $not: {$eq: "Jonia"}}}
)

/*Quiero encontrar los campeones que sean de rol Tirador o Tanque*/
db.Campeones.find(
    {$and: [
      {$or: [{Rol: "Tirador" }, {Rol: "Tanque"}]}]}    
)

/*Quiero encontrar los campeones que pertenezcan al año 2020 y sean luchadores*/
db.Campeones.find(
    {$and: [{FechaLanzamiento: {$gte: "2020-01-01"}},{$lte: "2021-01-01"}, {Rol: "Luchador"}]

)

/*Muestra todos los campeones que en el campo Rol contenga Luchador y Tanque*/
db.Campeones.find(
    {"Rol": {$in: ["Luchador","Tanque"]}}
)




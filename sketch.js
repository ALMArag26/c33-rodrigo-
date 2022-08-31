var player, playerImg, chestImg, homeImg, dragon1, dragon2, dragonImg, bgImg;
var gameState = "initial";
var numOfChests = 0;
var vy1 = -2;
var vy2 = 2;
var allWalls = [];
var allChests = []

var walls = [
    {x:10, y:20, w:1700, h:40}, //Ladrillo superior
    {x:10, y:450, w:1700, h:40},
    {x:10, y:450,w: 40, h: 900 }, // Ladrillo izquierdo
    {x:600,y:50 , w: 250, h: 40}, // Escalera inversa
    {x:600,y:90 , w: 150, h: 40}, // Escalera inversa
    {x:600,y:130 , w: 80, h: 40}, // Escalera inversa
    {x:700, y:300, w:250, h:40}, // L inversa
    {x:800,y:370, w:50, h:120}, // L inversa
    {x:300, y:300, w:250, h:40}, // L inversa
    {x:200,y:370, w:50, h:120}, // L inversa
    
  { x: 1000, y: 20, w: 2000, h:40 }, // Ladrillo superior
  { x: 1000, y: 450, w: 2000, h: 40 }, // Ladrillo inferior 1
  { x: 900, y: 450, w: 40, h: 700 }, // Ladrillo izquierdo
  { x: 1100, y: 165, w: 200, h: 250 }, // Gran bloque
  { x: 1250, y: 420, w: 50, h: 25 }, // Escaleras
  { x: 1300, y: 395, w: 50, h: 25 }, // Escaleras
  { x: 1350, y: 370, w: 50, h: 25 }, // Escaleras
  { x: 1500, y: 370, w: 50, h: 25 }, // Escalera inversa
  { x: 1550, y: 395, w: 50, h: 25 }, // Escalera inversa
  { x: 1600, y: 420, w: 50, h: 25 }, // Escalera inversa
  { x: 1760, y: 150, w: 250, h: 40 },
  { x: 1900, y: 105, w: 40, h: 130 },
  { x: 1950, y: 350, w: 100, h: 250 }
    
];

var chests = [
  { x: 300, y: 380, isCollected: false },
  { x: 800, y: 90, isCollected: false },
  { x: 700, y: 380, isCollected: false },
  { x: 1380, y: 130, isCollected: false },
  { x: 1430, y: 400, isCollected: false },
  { x: 1800, y: 80, isCollected: false }
];

function preload() {
  playerImg = loadImage("A.png");
  chestImg = loadImage("2.png");
  homeImg = loadImage("home.png");
  dragonImg = loadImage("Dragon2.png");
  brickImg = loadImage("brick.png");
  bgImg = loadImage("background3.png");
}



function setup(){
  createCanvas(950, 470);
  
  player = createSprite(40, height / 2, 50);
  player.addImage("player-image", playerImg);
  player.scale = 0.03
  
  // Creando el sprite del dragón
  
  
  // Agregando imágenes al sprite del dragón
 
  //agrega escala para el dragon
 
  
  // Agregando la velocidad inicial en la dirección 'y' para los dragones
  
  
  
  //creacion de muros
  for (var i in walls) {
    var brick = createSprite( walls[i].x, walls[i].y, walls[i].w, walls[i].h);
    brick.shapeColor = "#432616"
    allWalls.push(brick);
  }
  
  
  //creacion de cofres
  for(var j in chests){
    var chest = createSprite(chests[j].x, chests[j].y, chests[j].w, chests[j].h)
    chest.addImage("chest-image", chestImg)
    chest.scale = 0.09
    allChests.push(chest)    
  }
  
}


function draw(){
  background(bgImg);
  
  // Colisión para los muros
  for(var i in allWalls){
   player.collide(allWalls[i])
  }
 
//  // Agregando gravedad al jugador
  
  
  
  if (player.x > 850) {
    gameState = "win";
  }
  
  if (allWalls[3].x < -1300) {
    push();
    imageMode(CENTER);
    image(homeImg, 900, 385, 100, 90);
    pop();
  }

  
  // Recolectando cofres
  for(var j in allChests){
    if(player.collide(allChests[j])){
      allChests[j].visible = false
      allChests[j].destroy()
      numOfChests +=1
    }
  }
  
  
  // escenarios y condiciones para el Fin del juego
  if(dragon1.collide(player) || dragon2.collide(player)){
    gameState = "end"
    dragon1.velocityY = 0
    dragon2.velocityY = 0
  } 
 
  //llamar a los metodos
  drawSprites();
  showMessages();
  moveDragon();
  playerControls();
}


function playerControls() {

  //mover hacia arriba
   if(keyDown("up")){
    player.velocityY = -10;
  }
  
  // mover hacia la derecha
  if(keyDown("right") && gameState !== "win"){
    if (gameState === "initial") {
      gameState = "play";
    }

      player.x +=3;
     
      // al pasar los muros hacia atras
    if(allWalls[0].x > -1300){
      for(var i in allWalls){
        allWalls[i].x -=3
      }
      
      //al pasar los cofres hacia atras
      for(var j in allChests){
         allChests[j].x -= 3;
      }
      
      dragon1.x -= 3
      dragon2.x -= 3
    }
  }  
  
  //mover hacia la izquierda
   if(keyDown("left") && gameState === "play"){
     
      player.x -=3
  
     
     // Mover los muros hacia adelante 
    if(allWalls[3].x > -1300){
      for(var i in allWalls){
        allWalls[i].x +=3  
      }
       
      //mover los cofres hacia adelante 
      for(var j in allChests){
         allChests[j].x += 3;
      }
      
      dragon1.x += 3
      dragon2.x += 3
    }
     
  }  
}

function moveDragon(){
  // Agregando velocidad en la dirección 'y'
  
  
  // agrea limites al dragon1 
  
  
  //agrega limites al dragon 2
  
 
}



function showMessages() {

  //formato de texto 
  textSize(23);
  stroke(15);
  fill("white");
  
  if (gameState === "initial") {
    text(/*agrega texto inicial*/, width / 3.5, height / 2);
  }

  if (gameState === "win") {
    text(/*agrega texto al ganador*/, width / 3, height / 2);
  }
  if (gameState === "end") {
    text(/*agrega texto al finalizar*/, width / 3, height / 2);
  }

  image(chestImg, 80, 70, 20, 30);
  text(numOfChests, 105, 93);
};

// TELA DO JOGO
const canvas = document.querySelector("canvas")
canvas.width = 1024
canvas.height = 564

var posx = -1060;
var posy = -760;
var tecla = ''

const c = canvas.getContext("2d") // tipo de render da tela e pintura da tela em branco
c.fillStyle = "white"
c.fillRect(0, 0, canvas.width, canvas.height)
// FIM DA TELA DE JOGO

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

// CLASSE SPRITE
class Sprite {
    constructor({position,velocity,image}) {
        this.position=position
        this.image=image
    }

    draw(){
        c.drawImage(this.image,this.position.x,this.position.y)
    }
}

// DECLARAÇÃO DE IMAGENS
const backgroundImage = new Image() // mapa base do jogo
backgroundImage     .src = "./assets/Mapa/polimon1.png";

const playerImage = new Image() // imagem base do jogador
playerImage.src = './assets/Personagens/player_walk_down.png'
playerImage.fillStyle = "transform: scale(10);";
// FIM DA DECLARAÇÃO DE IMAGENS

// DECLARAÇÃO DE SPRITES
const background = new Sprite({
    position:{
        x:-1060,
        y:-760
    },
    image: backgroundImage
})
// FIM DA DECLARAÇÃO DE SPRITES

const keys = {
    w:{
        pressed: false
    },
    s:{
        pressed: false
    },
    a:{
        pressed: false
    },
    d:{
        pressed: false
    },
    
}
function animate(){
    window.requestAnimationFrame(animate)
    background.draw()
    c.drawImage(
        playerImage,
        0, // crop
        0, // crop
        playerImage.width / 3, //crop
        playerImage.height, //crop
        canvas.width / 2 - (playerImage.width / 3) / 2, // player
        canvas.height / 2 - playerImage.height / 2, // player 
        playerImage.width / 3, // player 
        playerImage.height // player 
    )

    // MOVIMENTAÇÃO DO BACKGROUND 
    // (JOGADOR PARADO, ILUSÃO DE MOVIMENTO, SEM CONTINUAR APOS APERTAR OUTRA TECLA, SEM DIAG)
    /*
    // se move apenas em uma direção por vez: else if // diagonal: só if
    if(keys.w.pressed && keys.s.pressed) background.position.y=background.position.y // para o boneco quando pressionado + de um botão
    else if(keys.a.pressed && keys.d.pressed) background.position.x=background.position.x
    else if(keys.w.pressed && lastKey==="w") background.position.y+=8 // pra cima
    else if(keys.s.pressed && lastKey==="s") background.position.y-=8 // pra baixo 
    else if(keys.a.pressed && lastKey==="a") background.position.x+=8 // pra esquerda 
    else if(keys.d.pressed && lastKey==="d") background.position.x-=8 // pra direita 
    
    */
    // MOVIMENTAÇÃO DO BACKGROUND 
    // (JOGADOR PARADO, ILUSÃO DE MOVIMENTO, CONTINUA APOS APERTAR OUTRA TECLA)
    if(keys.w.pressed && keys.s.pressed) background.position.y=background.position.y // para o boneco quando pressionado + de um botão
    else if(keys.a.pressed && keys.d.pressed) background.position.x=background.position.x
    else if(tecla==''){ //tecla clicada
    if(keys.w.pressed) {
        tecla = 'w'
        posy+=4
        background.position.y=posy;
         // pra cima 
    }
    else if(keys.s.pressed) {
        tecla = 's'
        posy-=4
        background.position.y=posy;
         // pra baixo 
    }
    else if(keys.a.pressed) {
        tecla ='a'
        posx+=4
        background.position.x=32+posx;
         // pra esquerda 
    }
    else if(keys.d.pressed) {
        tecla = 'd'
        posx-=4 
        background.position.x=32+posx;
         // pra direita
    }
    }   else { //ajuste para o próximo quadrado
        if(tecla=='w'){
            posy+=4
            background.position.y=posy;
            if(Math.round(posy/64)*64 == posy){
                tecla=''
            }
        }
        if(tecla=='s'){
            posy-=4
            background.position.y=posy;
            if(Math.round(posy/64)*64 == posy){
                tecla=''
            }
        }
        if(tecla=='a'){
            posx+=4
            background.position.x= 32+posx;
            if(Math.round(posx/64)*64 == posx){
                tecla=''
            }
        }
        if(tecla=='d'){
            posx-=4
            background.position.x= 32+posx;
            if(Math.round(posx/64)*64 == posx){
                tecla=''
            }
        }
    }
}

function andar(){
        background.position.y+=1
    
}
animate() // chamada da função de animação
let lastKey=""
// CONTROLE DE INPUT
window.addEventListener('keydown', e => {
    //console.log(e)
    console.log(keys)
    switch (e.key) {
        case "w":
            keys.w.pressed=true
            lastKey="w"
            break;
        case "s":
            keys.s.pressed=true
            lastKey="s"
            break;
        case "a":
            keys.a.pressed=true
            lastKey="a"
            break;
        case "d":
            keys.d.pressed=true
            lastKey="d"
            break;

        default:
            //console.log(e.key)
            break;
    }
})

window.addEventListener('keyup', e => {
    //console.log(e)
    switch (e.key) {
        case "w":
            keys.w.pressed=false
            break;
        case "s":
            keys.s.pressed=false
            break;
        case "a":
            keys.a.pressed=false
            break;
        case "d":
            keys.d.pressed=false
            break;

        default:
            break;
    }
})

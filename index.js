const canvas=document.querySelector("canvas") // tela de jogo


// tamanho da tela
// canvas.width=Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
// canvas.height=Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
canvas.width=1024 
canvas.height=564

const c = canvas.getContext("2d") // tipo de render da tela e pintura da tela em branco
c.fillStyle = "white"
c.fillRect(0,0,canvas.width,canvas.height)

const image = new Image() // mapa base do jogo
image.src = "./assets/Mapa/polimon1.png";

const playerImage = new Image() // imagem base do jogador
playerImage.src = './assets/Personagens/player_walk_down.png'
playerImage.fillStyle = "transform: scale(10);";

image.onload = () => {
    c.drawImage(image,-735,-1027)
    c.drawImage(playerImage,canvas.width/2 - playerImage.width/2,canvas.height/2 - playerImage.height/2)
}
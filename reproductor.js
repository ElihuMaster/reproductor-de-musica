window.onload = reproducir;
    

let musica = ["musica/amores como el nuestro.mp3", 
              "musica/Cuando Quieras - Nicky Jam ft Valentino.mp3", 
              "musica/Encantadora-Yandel.mp3",
              "musica/chichi peralta - chichi peralta - procura.mp3",
              "musica/cristhian meier & pedro suarez vertiz - esa si es una mujer.mp3",];
let play = document.getElementById("play"); play.addEventListener("click", funcPlay);
let pausa = document.getElementById("pausar"); pausa.addEventListener("click", pausar)
let siguiente = document.getElementById("siguiente"); siguiente.addEventListener("click", funcSiguiente);
let anterior = document.getElementById("anterior"); anterior.addEventListener("click", funcRetroceder);
let subirvol = document.getElementById("calidad"); 
//let barra = document.getElementById("barra"); barra.addEventListener("click", funcBarra);
let mostrarTitulo = document.getElementById("songTitle");

let song = document.getElementById("song");
let actualSong = 0;
 //let songs = new Audio();

function reproducir () {
    
    song.src = musica[actualSong];
    mostrarTitulo.innerText = musica[actualSong]
    // song.pause();
}


function funcPlay(){
    song.play()
   
} 

function pausar(){
    song.pause()
    
}

function funcSiguiente(){
    //hacer validaciones de preferencia antes de realizar una accion
    if(actualSong >= musica.length - 1) {
        actualSong = 0;
    }else{
        actualSong += 1
    }
    song.src = musica[actualSong];
    song.play()
    mostrarTitulo.innerText = musica[actualSong];
}

function funcRetroceder() {
    if(actualSong === 0) {
        actualSong = musica.length - 1;
    }else{
        actualSong -= 1
    }
    song.src = musica[actualSong];
    song.play()
    mostrarTitulo.innerText = musica[actualSong];
}


    



//function disminuirVol(){
//    song.src = musica[actualSong];
//    bajarvol.volume - 0.1;
//}

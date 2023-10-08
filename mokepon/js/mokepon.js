const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");

const sectionReiniciar = document.getElementById("reiniciar");

const botonMascotaJugador = document.getElementById("boton-mascota");
const botonReiniciar = document.getElementById("boton-reiniciar");

const sectionSeleccionarMascota = document.getElementById(
  "seleccionar-mascota"
);

const spanMascotaJugador = document.getElementById("mascota-jugador");

const spanMascotaEnemigo = document.getElementById("mascota-enemigo");

const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");

const sectionMensajes = document.getElementById("resultado");
const ataquesDelJugador = document.getElementById("ataques-del-jugador");
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");
const contenedorTarjetas = document.getElementById("contenedorTarjetas");
const contenedorAtaques = document.getElementById("contenedorAtaques");

const sectionVerMapa = document.getElementById("ver-mapa");
const mapa = document.getElementById("mapa");

let mokepones = [];

let ataqueJugador = [];
let ataqueEnemigo = [];
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let opcionDeMokepones;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let inputLangostelvis;
let inputTucapalma;
let inputPydos;
let mascotaJugador;
let mascotaJugadorObjeto;
let ataquesMokepon;
let ataquesMokeponEnemigo;

let botonFuego;

let botonAgua;

let botonTierra;

let botones = [];

let victoriasJugador = 0;
let victoriasEnemigo = 0;

let vidasJugador = 3;
let vidasEnemigo = 3;

let lienzo = mapa.getContext("2d");

let intervalo;

let mapaBackground = new Image();

mapaBackground.src = "./assets/img/mokemap.png";

class Mokepon {
  constructor(nombre, foto, vida ,fotoMapa, x = 10, y = 10) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
    this.x =x;
    this.y =y;
    this.ancho = 40;
    this.alto = 40;
    this.mapaFoto = new Image();
    this.mapaFoto.src = fotoMapa;
    this.velocidadX = 0;
    this.velocidadY = 0;
  }

   pintarMokepon() {
    lienzo.drawImage(
      this.mapaFoto,
      this.x,
      this.y,
      this.ancho,
      this.alto
    );
  }

}

let hipodoge = new Mokepon("Hipodoge", "./assets/img/hipodoge.png", 5,'./assets/img/hipodoge_avatar.png');

let capipepo = new Mokepon("Capipepo", "./assets/img/capipepo.png", 5,'./assets/img/capipepo_avatar.png');

let ratigueya = new Mokepon("Ratigueya", "./assets/img/ratigueya.png", 5,'./assets/img/ratigueya_avatar.png');



let hipodogeEnemigo = new Mokepon("Hipodoge", "./assets/img/hipodoge.png", 5,'./assets/img/hipodoge_avatar.png',80,120);

let capipepoEnemigo = new Mokepon("Capipepo", "./assets/img/capipepo.png", 5,'./assets/img/capipepo_avatar.png',150,95);

let ratigueyaEnemigo = new Mokepon("Ratigueya", "./assets/img/ratigueya.png", 5,'./assets/img/ratigueya_avatar.png',200,190);


hipodoge.ataques.push(
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🌱", id: "boton-tierra" }
);

capipepo.ataques.push(
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" }
);

ratigueya.ataques.push(
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🌱", id: "boton-tierra" }
);

mokepones.push(hipodoge, capipepo, ratigueya);

function iniciarJuego() {
  sectionSeleccionarAtaque.style.display = "none";
  sectionVerMapa.style.display = "none";

  mokepones.forEach((mokepon) => {
    opcionDeMokepones = `
    
    <input type="radio" name="mascota" id="${mokepon.nombre}">
        <label class="tarjeta-de-mokepon" tabindex="0" for=${mokepon.nombre}>
        <p>${mokepon.nombre}</p>
        <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
    `;
    contenedorTarjetas.innerHTML += opcionDeMokepones;

    inputHipodoge = document.getElementById("Hipodoge");
    inputCapipepo = document.getElementById("Capipepo");
    inputRatigueya = document.getElementById("Ratigueya");
    inputLangostelvis = document.getElementById("Langostelvis");
    inputTucapalma = document.getElementById("Tucapalma");
    inputPydos = document.getElementById("Pydos");
  });

  sectionReiniciar.style.display = "none";

  botonMascotaJugador.addEventListener("click", selecionarMascotaJugador);

  botonReiniciar.addEventListener("click", reiniciarJuego);

  let botonSeleccionar = document.getElementById("boton-mascota");
  botonSeleccionar.addEventListener("click", disSelect);
}

function disSelect() {
  let botonSelect = document.getElementById("boton-mascota");
  botonSelect.disabled = true;
}

function selecionarMascotaJugador() {
  sectionSeleccionarMascota.style.display = "none";

  //sectionSeleccionarAtaque.style.display = "flex";

 

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = inputHipodoge.id;
    mascotaJugador = inputHipodoge.id;
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = inputCapipepo.id;
    mascotaJugador = inputCapipepo.id;
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = inputRatigueya.id;
    mascotaJugador = inputRatigueya.id;
  } else if (inputLangostelvis.checked) {
    spanMascotaJugador.innerHTML = inputLangostelvis.id;
    mascotaJugador = inputLangostelvis.id;
  } else if (inputTucapalma.checked) {
    spanMascotaJugador.innerHTML = inputTucapalma.id;
    mascotaJugador = inputTucapalma.id;
  } else if (inputPydos.checked) {
    spanMascotaJugador.innerHTML = inputPydos.id;
    mascotaJugador = inputPydos.id;
  } else {
    alert("Elige una mascota");
    reiniciarJuego();
  }

  extraerAtaques(mascotaJugador);
  sectionVerMapa.style.display = "flex";

  iniciarMapa();

  selecionarMascotaEnemigo();
}

function extraerAtaques(mascotaJugador) {
  let ataques;

  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      ataques = mokepones[i].ataques;
    }
  }
  mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    ataquesMokepon = `<button id="${ataque.id}" class="boton-de-ataque BAtaque">${ataque.nombre}</button>
    `;
    contenedorAtaques.innerHTML += ataquesMokepon;
  });

  botonFuego = document.getElementById("boton-fuego");
  botonAgua = document.getElementById("boton-agua");
  botonTierra = document.getElementById("boton-tierra");
  botones = document.querySelectorAll(".BAtaque");
}

function secuenciaAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      if (e.target.textContent === "🔥") {
        ataqueJugador.push("FUEGO");
        console.log(ataqueJugador);
        boton.style.background = "#112f58";
        boton.disabled = true;
      } else if (e.target.textContent === "💧") {
        ataqueJugador.push("AGUA");
        console.log(ataqueJugador);
        boton.style.background = "#112f58";
        boton.disabled = true;
      } else {
        ataqueJugador.push("TIERRA");
        console.log(ataqueJugador);
        boton.style.background = "#112f58";
        boton.disabled = true;
      }
      ataqueAleatorioEnemigo();
    });
  });
}

function selecionarMascotaEnemigo() {
  let mascotaAleatorio = aleatorio(0, mokepones.length - 1);

  spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre;
  ataquesMokeponEnemigo = mokepones[mascotaAleatorio].ataques;
  secuenciaAtaque();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1);

  if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
    ataqueEnemigo.push("FUEGO");
  } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
    ataqueEnemigo.push("AGUA");
  } else {
    ataqueEnemigo.push("TIERRA");
  }
  console.log(ataqueEnemigo);

  iniciarPelea();
}

function iniciarPelea() {
  if (ataqueJugador.length === 5) {
    combate();
  }
}

function indexAmbosOponentes(jugador, enemigo) {
  indexAtaqueJugador = ataqueJugador[jugador];
  indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}

function combate() {
  for (let i = 0; i < ataqueJugador.length; i++) {
    if (ataqueJugador[i] === ataqueEnemigo[i]) {
      indexAmbosOponentes(i, i);
      crearMensaje("EMPATE");
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (ataqueJugador[i] == "FUEGO" && ataqueEnemigo[i] == "TIERRA") {
      indexAmbosOponentes(i, i);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (ataqueJugador[i] == "AGUA" && ataqueEnemigo[i] == "FUEGO") {
      indexAmbosOponentes(i, i);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (ataqueJugador[i] == "TIERRA" && ataqueEnemigo[i] == "AGUA") {
      indexAmbosOponentes(i, i);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else {
      indexAmbosOponentes(i, i);
      crearMensaje("PERDISTE");
      victoriasEnemigo++;
      spanVidasEnemigo.innerHTML = victoriasEnemigo;
    }
  }
  revisarVidas();
}

function revisarVidas() {
  if (victoriasJugador === victoriasEnemigo) {
    crearMensajeFinal("Esto fue empate!!");
  } else if (victoriasJugador > victoriasEnemigo) {
    crearMensajeFinal("HAZ GANADO :)");
  } else {
    crearMensajeFinal("Lo siento,perdiste :(");
  }
}

function crearMensaje(resultado) {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;

  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  sectionMensajes.innerHTML = resultadoFinal;

  sectionReiniciar.style.display = "block";
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function pintarCanvas() {

  mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX;
  mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY;

  lienzo.clearRect(0, 0, mapa.width, mapa.height);

  lienzo.drawImage(mapaBackground, 0, 0, mapa.width, mapa.height);

  mascotaJugadorObjeto.pintarMokepon();

  hipodogeEnemigo.pintarMokepon();
  capipepoEnemigo.pintarMokepon();
  ratigueyaEnemigo.pintarMokepon();

  
}

function moverArriba() {
  mascotaJugadorObjeto.velocidadY = -5;
}

function moverIzquierda() {;

  mascotaJugadorObjeto.velocidadX = -5;
}

function moverAbajo() {

  mascotaJugadorObjeto.velocidadY = 5;
}

function moverDerecha() {
  mascotaJugadorObjeto.velocidadX = 5;
}

function detenerMovimiento() {
  mascotaJugadorObjeto.velocidadX = 0;
  mascotaJugadorObjeto.velocidadY = 0;
}

function sePresionoUnaTecla(event) {
  event.key += event.key;

  switch (event.key) {
    case "ArrowUp":
      moverArriba();
      break;

    case "ArrowDown":
      moverAbajo();
      break;

    case "ArrowLeft":
      moverIzquierda();
      break;

    case "ArrowRight":
      moverDerecha();
      break;
  }
}

function iniciarMapa() {
  mapa.width = 320;
  mapa.height = 240;
  mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador);

  intervalo = setInterval(pintarCanvas, 50);

  window.addEventListener("keydown", sePresionoUnaTecla);
  window.addEventListener("keyup", detenerMovimiento);
}

function obtenerObjetoMascota() {
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      return mokepones[i];
    }
  }
}

window.addEventListener("load", iniciarJuego);

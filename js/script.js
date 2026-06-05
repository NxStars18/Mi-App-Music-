let indiceActual = 0;

const canciones = [
  {
    nombre: "Mi Reina Pepiada",
    artista: "Álvaro Díaz",
    archivo: "music/Reina Pepiada (Lyric Video).mp3",
    portada: "images/Reina Pepiada.jpg"
  },
  {
    nombre: "Desconectado",
    artista: "Jaze",
    archivo: "music/Desconectado.mp3",
    portada: "images/Desconectado.jpg"
  },
  {
    nombre: "Otro Atardecer",
    artista: "Bad Bunny",
    archivo: "music/Otro Atardecer.mp3",
    portada: "images/Otro Atardecer.jpg"
  }
];

function cargarCancion(index) {

  document.getElementById("titulo").textContent =
    canciones[index].nombre;

  document.getElementById("artista").textContent =
    canciones[index].artista;

  document.getElementById("portada").src =
    canciones[index].portada;

  document.getElementById("player").src =
    canciones[index].archivo;
}

function siguiente() {

  indiceActual++;

  if (indiceActual >= canciones.length) {
    indiceActual = 0;
  }

  cargarCancion(indiceActual);

  const player = document.getElementById("player");
  player.play();
}

function anterior() {

  indiceActual--;

  if (indiceActual < 0) {
    indiceActual = canciones.length - 1;
  }

  cargarCancion(indiceActual);

  const player = document.getElementById("player");
  player.play();
}

function togglePlay() {

  const player = document.getElementById("player");
  const btn = document.getElementById("playPauseBtn");

  if (player.paused) {
    player.play();
    btn.textContent = "⏸";
  } else {
    player.pause();
    btn.textContent = "▶";
  }
}

cargarCancion(0);

const player = document.getElementById("player");
const btn = document.getElementById("playPauseBtn");

player.addEventListener("play", () => {
  btn.textContent = "⏸";
});

player.addEventListener("pause", () => {
  btn.textContent = "▶";
});
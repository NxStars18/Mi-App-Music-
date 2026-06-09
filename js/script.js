let indiceActual = 0;

const canciones = [
  {
    nombre: "Mi Reina Pepiada",
    artista: "Álvaro Díaz",
    archivo: "music/Reina Pepiada (Lyric Video).mp3",
    portada: "images/Reina Pepiada.jpg",
    favorito: false
  },
  {
    nombre: "Desconectado",
    artista: "Jaze",
    archivo: "music/Desconectado.mp3",
    portada: "images/Desconectado.jpg",
    favorito: false
  },
  {
    nombre: "Otro Atardecer",
    artista: "Bad Bunny",
    archivo: "music/Otro Atardecer.mp3",
    portada: "images/Otro Atardecer.jpg",
    favorito: false
  }
];

const player = document.getElementById("player");

function cargarCancion(index) {

  indiceActual = index;

  document.getElementById("titulo").textContent =
    canciones[index].nombre;

  document.getElementById("artista").textContent =
    canciones[index].artista;

  document.getElementById("portada").src =
    canciones[index].portada;

  player.src =
    canciones[index].archivo;
}

function seleccionarCancion(index) {

  cargarCancion(index);

  player.play();
}

function togglePlay() {

  const btn =
    document.getElementById("playPauseBtn");

  if (player.paused) {

    player.play();
    btn.textContent = "⏸";

  } else {

    player.pause();
    btn.textContent = "▶";

  }
}

function siguiente() {

  indiceActual++;

  if (indiceActual >= canciones.length) {

    indiceActual = 0;
  }

  cargarCancion(indiceActual);

  player.play();
}

function anterior() {

  indiceActual--;

  if (indiceActual < 0) {

    indiceActual =
      canciones.length - 1;
  }

  cargarCancion(indiceActual);

  player.play();
}

function aleatorio() {

  indiceActual =
    Math.floor(
      Math.random() * canciones.length
    );

  cargarCancion(indiceActual);

  player.play();
}

function crearPlaylist() {

  const lista =
    document.getElementById("playlist");

  lista.innerHTML = "";

  canciones.forEach((cancion, index) => {

    const li =
      document.createElement("li");

    li.textContent =
      `${cancion.nombre} - ${cancion.artista}`;

    li.onclick = () => {

      seleccionarCancion(index);

    };

    lista.appendChild(li);

  });

}

function buscarCancion() {

  const texto =
    document.getElementById("buscador")
      .value.toLowerCase();

  const items =
    document.querySelectorAll("#playlist li");

  items.forEach(item => {

    if (
      item.textContent
        .toLowerCase()
        .includes(texto)
    ) {

      item.style.display = "block";

    } else {

      item.style.display = "none";

    }

  });

}

player.addEventListener(
  "ended",
  siguiente
);

player.addEventListener(
  "play",
  () => {
    document.getElementById(
      "playPauseBtn"
    ).textContent = "⏸";
  }
);

player.addEventListener(
  "pause",
  () => {
    document.getElementById(
      "playPauseBtn"
    ).textContent = "▶";
  }
);

function toggleFavorito() {

  canciones[indiceActual].favorito =
    !canciones[indiceActual].favorito;

  actualizarFavorito();

  mostrarFavoritos();
}

function actualizarFavorito() {

  const btn =
    document.getElementById("favoritoBtn");

  if (canciones[indiceActual].favorito) {

    btn.textContent = "❤️";

  } else {

    btn.textContent = "🤍";

  }
}
function mostrarFavoritos() {

  const listaFavoritos =
    document.getElementById("favoritos");

  listaFavoritos.innerHTML = "";

  canciones.forEach((cancion, index) => {

    if (cancion.favorito) {

      const li = document.createElement("li");

      li.textContent =
        `${cancion.nombre} - ${cancion.artista}`;

      li.onclick = () => {
        seleccionarCancion(index);
      };

      listaFavoritos.appendChild(li);
    }

  });

}

function mostrarSoloFavoritos() {

  const lista =
    document.getElementById("playlist");

  lista.innerHTML = "";

  canciones.forEach((cancion, index) => {

    if (cancion.favorito) {

      const li =
        document.createElement("li");

      li.textContent =
        `${cancion.nombre} - ${cancion.artista}`;

      li.onclick = () => {
        seleccionarCancion(index);
      };

      lista.appendChild(li);

    }

  });

}

cargarCancion(0);

crearPlaylist();

mostrarFavoritos();
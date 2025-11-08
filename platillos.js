// Datos de los platillos
const platillos = [
  {
    region: "Costa",
    items: [
      {
        nombre: "Arroz con pollo",
        descripcion:
          "Ingredientes: Presa de pollo, arveja, choclo, pimiento y sarsa criolla o papa a la huancaína",
        precio: 25,
        puntuacion: 5,
        imagen: "https://i.ytimg.com/vi/4kmy5EOQqqM/maxresdefault.jpg",
      },
      {
        nombre: "Ají de gallina",
        descripcion:
          "Ingredientes: Papa, crema de ají de gallina, pollo deshilachado, medio huevo sancochado, aceituna y arroz",
        precio: 22,
        puntuacion: 5,
        imagen: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQF3lvx_fPJyNqSuYyrfinneWiJFyJJ0Yifo7-0N37c7fFEycNq",
      },
    ],
  },
  {
    region: "Sierra",
    items: [
      {
        nombre: "Chicharrón de chancho",
        descripcion:
          "Ingredientes: Chancho frito previamente sancochado, con camote y mote",
        precio: 24,
        puntuacion: 5,
        imagen: "https://www.abc.com.py/resizer/v2/P3KMQJGD2BAFHH5IW44ILMVV5I.jpg?auth=8ba1f3b5833915a50f40d1ad6c522e0029dc90a10694952dfa60a80fb34270af&width=910&height=590&smart=true",
      },
      {
        nombre: "Caldo de res",
        descripcion:
          "Ingredientes: Verduras y carne de res",
        precio: 20,
        puntuacion: 4,
        imagen: "https://cdn7.kiwilimon.com/recetaimagen/33487/960x640/38842.jpg.jpg",
      }
    ],
  },
  {
    region: "Selva",
    items: [
      {
        nombre: "Juane",
        descripcion:
          "Ingredientes: Arroz, presa de pollo, palillo, sacha culantro, huevo hervido y aceituna",
        precio: 30,
        puntuacion: 5,
        imagen: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUnj34VDVIbe_36mwLZNUijhONn0Q06Iw21NZb7BxCC5RlPrHz",
      },
      {
        nombre: "Tacacho con cecina",
        descripcion:
          "Ingredientes: Tacacho, cecina y salsa amazónica",
        precio: 25,
        puntuacion: 4,
        imagen: "https://i.ytimg.com/vi/wlZ-aUEXWF8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAwOqitFrF0km0Bay-IG6BadudKBQ",
      }
    ],
  },
];

// Función para crear la tarjeta de cada platillo
function crearPlatilloCard(plato) {
  const platilloCard = document.createElement("div");
  platilloCard.classList.add(
    "bg-gray-100",
    "rounded-xl",
    "flex",
    "items-center",
    "p-4",
    "shadow-md",
    "hover:shadow-lg",
    "transition",
    "relative"
  );

  // Imagen del platillo
  const img = document.createElement("img");
  img.src = plato.imagen;
  img.alt = plato.nombre;
  img.classList.add("w-28", "h-28", "object-cover", "rounded-lg", "mr-4");
  platilloCard.appendChild(img);

  // Información del platillo
  const infoDiv = document.createElement("div");

  const nombre = document.createElement("h4");
  nombre.classList.add("text-xl", "font-semibold", "mb-1");
  nombre.textContent = plato.nombre;

  const descripcion = document.createElement("p");
  descripcion.classList.add("text-gray-700", "text-sm", "mb-1");
  descripcion.textContent = plato.descripcion;

  const precio = document.createElement("p");
  precio.classList.add("text-gray-800", "font-medium");
  precio.textContent = `Precio: s/. ${plato.precio}`;

  infoDiv.appendChild(nombre);
  infoDiv.appendChild(descripcion);
  infoDiv.appendChild(precio);

  platilloCard.appendChild(infoDiv);

  // Estrellas (por la puntuación)
  const estrellasDiv = document.createElement("div");
  estrellasDiv.classList.add("absolute", "inset-0", "flex", "justify-center", "items-center", "bg-black/50", "rounded-xl", "opacity-0", "transition-opacity", "duration-200");

  const estrellas = [...Array(plato.puntuacion)].map(() => {
    const starIcon = document.createElement("svg");
    starIcon.setAttribute("width", "24");
    starIcon.setAttribute("height", "24");
    starIcon.setAttribute("viewBox", "0 0 24 24");
    starIcon.setAttribute("fill", "gold");
    starIcon.setAttribute("stroke", "gold");
    starIcon.innerHTML = `<path d="M12 .587l3.668 7.568 8.332 1.204-6.001 5.801 1.417 8.385L12 18.634l-7.416 4.411 1.417-8.385-6.001-5.801 8.332-1.204L12 .587z"/>`;
    return starIcon;
  });

  estrellas.forEach((star) => estrellasDiv.appendChild(star));
  platilloCard.appendChild(estrellasDiv);

  // Manejar eventos hover
  platilloCard.addEventListener("mouseover", () => {
    estrellasDiv.classList.remove("opacity-0");
    estrellasDiv.classList.add("opacity-100");
  });

  platilloCard.addEventListener("mouseout", () => {
    estrellasDiv.classList.remove("opacity-100");
    estrellasDiv.classList.add("opacity-0");
  });

  return platilloCard;
}

// Función para renderizar los platillos
function renderizarPlatillos() {
  const platillosContainer = document.getElementById("platillos-container");

  platillos.forEach((categoria) => {
    // Crear contenedor para la categoría
    const categoriaDiv = document.createElement("div");
    categoriaDiv.classList.add("mb-10");

    // Título de la categoría
    const categoriaTitle = document.createElement("h3");
    categoriaTitle.classList.add("text-3xl", "font-bold", "text-blue-800", "mb-6");
    categoriaTitle.textContent = categoria.region;

    categoriaDiv.appendChild(categoriaTitle);

    // Crear contenedor para los platillos
    const itemsContainer = document.createElement("div");
    itemsContainer.classList.add("flex", "flex-col", "gap-6");

    categoria.items.forEach((plato) => {
      const platoCard = crearPlatilloCard(plato);
      itemsContainer.appendChild(platoCard);
    });

    categoriaDiv.appendChild(itemsContainer);
    platillosContainer.appendChild(categoriaDiv);
  });
}

// Llamar la función para renderizar los platillos
renderizarPlatillos();

const platillos = [
  {
    region: "Costa",
    items: [
      {
        nombre: "Mazamorra morada",
        precio: 11,
        puntuacion: 5,
        imagen: "https://iperu.pe/assets/images/mazamorra-morada_800x534.webp",
      },
      {
        nombre: "Arroz con leche",
        precio: 10,
        puntuacion: 5,
        imagen: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTfyUDobDO4O1bYs9xYvNY4Y89w-M7wh--sZduKJCooUAUjVpd1",
      },
    ],
  },
  {
    region: "Sierra",
    items: [
      {
        nombre: "Mazamorra de calabaza",
        precio: 12,
        puntuacion: 5,
        imagen: "https://buenazo.cronosmedia.glr.pe/original/2021/05/24/60ac125614374d27e25b6587.jpg",
      },
      {
        nombre: "Kinkón",
        precio: 10,
        puntuacion: 4,
        imagen: "https://cdn-blog.joinnus.com/wp-content/uploads/2023/11/24095341/kingkong-1024x600.jpg",
      }
    ],
  },
  {
    region: "Selva",
    items: [
      {
        nombre: "Picarones",
        precio: 15,
        puntuacion: 5,
        imagen: "https://comidaperuanaweb.org/wp-content/uploads/2024/10/10-postres-tipicos-de-la-selva-peruana-4.jpg",
      },
      {
        nombre: "Granizado de sandía",
        precio: 12,
        puntuacion: 4,
        imagen: "https://cdn.nutritionstudies.org/wp-content/uploads/2015/06/watermelon-sorbet-3-1024x683.jpg",
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

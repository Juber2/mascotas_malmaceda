// ============================================================
//  DATOS DE LAS MASCOTAS
//  Edita este archivo para cambiar la información que se muestra.
//  Las fotos van en la carpeta img/ (ver campo "foto" y "fotos").
// ============================================================

const DUENOS = [
  {
    nombre: "Nombre del dueño 1",
    relacion: "Dueño",
    telefono: "+51 999 999 999",
    whatsapp: "51999999999", // solo números, con código de país
    foto: "img/duenos/dueno1.jpg"
  },
  {
    nombre: "Nombre del dueño 2",
    relacion: "Dueña",
    telefono: "+51 988 888 888",
    whatsapp: "51988888888",
    foto: "img/duenos/dueno2.jpg"
  }
];

const HOGAR = {
  direccion: "Av. Ejemplo 123, Urb. Los Jardines",
  referencia: "A dos cuadras del parque principal, casa de portón verde",
  distrito: "Distrito / Ciudad",
  // Pega aquí el link de Google Maps de tu casa (Compartir > Copiar enlace)
  mapsUrl: "https://maps.google.com/?q=-12.0464,-77.0428",
  // Coordenadas para el mapa embebido (lat, lng)
  lat: -12.0464,
  lng: -77.0428
};

const MASCOTAS = [
  {
    id: "nala",
    nombre: "Nala",
    especie: "Perro",
    raza: "Mestiza",
    sexo: "Hembra",
    edad: "3 años",
    color: "Marrón con manchas blancas",
    tamano: "Mediano",
    peso: "12 kg",
    esterilizada: true,
    chip: "No",
    senasParticulares: "Mancha blanca en el pecho, collar rojo con placa.",
    personalidad: "Muy cariñosa y juguetona. Se acerca a las personas sin problema.",
    salud: "Vacunas al día. No tiene alergias conocidas.",
    comida: "Croquetas para adulto, 2 veces al día.",
    cumpleanos: "15 de marzo",
    foto: "img/nala/perfil.jpg",
    fotos: [
      "img/nala/foto1.jpg",
      "img/nala/foto2.jpg",
      "img/nala/foto3.jpg"
    ]
  },
  {
    id: "gringa",
    nombre: "Gringa",
    especie: "Perro",
    raza: "Mestiza",
    sexo: "Hembra",
    edad: "5 años",
    color: "Blanca",
    tamano: "Pequeño",
    peso: "7 kg",
    esterilizada: true,
    chip: "No",
    senasParticulares: "Orejas caídas, collar celeste.",
    personalidad: "Tranquila y un poco tímida con extraños. Le gusta que le hablen despacio.",
    salud: "Vacunas al día. Toma medicación diaria (consultar con dueños).",
    comida: "Croquetas para raza pequeña, 2 veces al día.",
    cumpleanos: "2 de agosto",
    foto: "img/gringa/perfil.jpg",
    fotos: [
      "img/gringa/foto1.jpg",
      "img/gringa/foto2.jpg",
      "img/gringa/foto3.jpg"
    ]
  }
];

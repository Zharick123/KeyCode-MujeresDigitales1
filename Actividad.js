let nombre = "Pepe";
let edad = 25;
let precio = 99.90;
let seriesFavoritas = ["Dark", "Mr Robot", "Castlevania"];

let peliculasFavoritas = [
    {
        nombre: "El exorcita",
        año: 1973,
        protagonistas: ["Ellen Burstyn", "Jason Miller", "Linda Blair","Max von" ]
    },
    {
        nombre: "Camino hacia el terror",
        año: 2003,
        protagonistas: ["Desmond Harrington", "Eliza Dushku"]
    },
    {
        nombre: "Anabelle",
        año: 1968,
        protagonistas: ["Patrick Wilson”, “Vera Farmiga", "Annabelle Wallis", "Ward Horton"]
    }
];

// 2. Mostrar los valores por consola
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Precio:", precio);
console.log("Series Favoritas:", seriesFavoritas);
console.log("Películas Favoritas:", peliculasFavoritas);

// 3. Incrementar la edad en 1 y volver a mostrarla
edad += 1;
console.log("Edad después de un año:", edad);

// 4. Agregar una serie a la lista de series favoritas y volver a mostrarla
seriesFavoritas.push("No se aceptan devoluciones");
console.log("Series Favoritas actualizadas:", seriesFavoritas);

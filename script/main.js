const contenido = document.querySelector("#contenido");
const nombre = document.querySelector("#nombre");
const pokemon = document.querySelector("#pokemon");
const boton = document.querySelector("#boton");
const inicio = document.querySelector("#inicio");
const datos = document.querySelector("#datos");
const foto = document.querySelector("#foto")
const nombre_usuario = document.querySelector("#nombre-usuario")
const cita = document.querySelector("#cita")
const footer = document.querySelector("#footer")
const borrar = document.querySelector("#borrar")

contenido.addEventListener('click', () => {

    inicio.style.display = "none";
    datos.style.display = "grid";

});

boton.addEventListener('click', () => {

    localStorage.setItem('nombre', nombre.value);
    localStorage.setItem('pokemon', pokemon.value);
    datos.style.display = "none";
    salida.style.display = "grid";
    const usuario = localStorage.getItem('nombre');
    const llamada = localStorage.getItem('pokemon');
    
    fetch('https://pokeapi.co/api/v2/pokemon/' + llamada) 
        .then(response => response.json())
        .then(pokemon => {
            foto.src = pokemon.sprites.front_default;
            nombre_usuario.innerHTML = usuario; 
    });

    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(frase => {
            cita.innerHTML = frase.value;
    });

    footer.innerHTML = 'Made with ❤️ by ' + usuario;
});

borrar.addEventListener('click', () => {

    localStorage.removeItem('nombre');
    localStorage.removeItem('pokemon');

});

if (localStorage.getItem("nombre") != null && localStorage.getItem("nombre") != "") {

    inicio.style.display = "none";
    salida.style.display = "grid";
    const usuario = localStorage.getItem('nombre');
    const llamada = localStorage.getItem('pokemon');

    fetch('https://pokeapi.co/api/v2/pokemon/' + llamada)
        .then(response => response.json())
        .then(pokemon => {
            foto.src = pokemon.sprites.front_default;
            nombre_usuario.innerHTML = usuario;
        });

    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(frase => {
            cita.innerHTML = frase.value;
        });

    footer.innerHTML = 'Made with ❤️ by ' + usuario;
};


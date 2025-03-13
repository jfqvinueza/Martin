// const fetch = require("node-fetch");

async function obtenerHTML(url) {
    const respuesta = await fetch(url);
    const html = await respuesta.text();
    console.log(html);
}

obtenerHTML("https://www.facebook.com");

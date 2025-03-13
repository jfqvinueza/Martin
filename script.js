// const fetch = require("node-fetch");

async function obtenerHTML(url) {
    const respuesta = await fetch(url, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
        }
    });
    const html = await respuesta.text();
    console.log(html);
}

obtenerHTML("https://www.facebook.com");

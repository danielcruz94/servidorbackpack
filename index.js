const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.get("/track", (req, res) => {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const timestamp = new Date().toISOString();

    const log = { ip, timestamp };

    // Guardar registro en un archivo JSON
    const logFile = "views.json";
    let logs = [];
    if (fs.existsSync(logFile)) {
        logs = JSON.parse(fs.readFileSync(logFile));
    }
    logs.push(log);
    fs.writeFileSync(logFile, JSON.stringify(logs, null, 2));

    console.log(`📌 PDF abierto desde IP: ${ip} a las ${timestamp}`);

    // Enviar una imagen 1x1 transparente
    res.setHeader("Content-Type", "image/png");
    res.send(Buffer.from(
        "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/NNJdQAAAABJRU5ErkJggg==",
        "base64"
    ));
});

app.listen(PORT, () => console.log(`🚀 Servidor de rastreo en http://localhost:${PORT}`));
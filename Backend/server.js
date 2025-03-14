const { v4: uuidv4} = require("uuid");
const http = require("http");
const PORT = 5000;

const contatos = [
    {id: 1, nome: "Diego", tel:"555-123-789"},
    {id: 2, nome: "Carla", tel:"555-123-339"},
    {id: 3, nome: "Roberta", tel:"555-123-719"},
    {id: 4, nome: "Lucas", tel:"555-123-327"},
    {id: 5, nome: "Valmir", tel:"555-123-669"}
]

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.writeHead(200, {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Access-Control-Allow-Headers": "Content-Type"
        })
        res.end();
        return
    }
    if (req.url === "/api/contatos" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(contatos));
    } else if (req.url === "/api/contatos" && req.method === "POST") {
        let data = "";
        req.on("data", (chunk) => {
            data += chunk;
        });
        req.on("end", () => {
            const contato = JSON.parse(data);
            contato.id = uuidv4();
            contatos.push(contato);
            console.log(contatos);
            res.writeHead(201, { "Content-Type" : "application/json" });
            res.end(JSON.stringify(contato));
        });
    } else if (req.url.startsWith("/api/contatos/") && req.method === "DELETE") {
        const id = req.url.split("/")[3];
        const index = contatos.findIndex(contato => String(contato.id) === String(id));
    
        if (index !== -1) {
            contatos.splice(index, 1);
            res.writeHead(204);
            res.end();
        } else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Contato não encontrado" }));
        }
    } else if (req.url.startsWith("/api/contatos/") && req.method === "PUT") {
        const id = req.url.split("/")[3];
        let data = "";

        req.on("data", (chunk) => {
            data += chunk;
        });

        req.on("end", () => {
            const contatoAtualizado = JSON.parse(data);
            const index = contatos.findIndex(contato => String(contato.id) === String(id));

            if (index !== -1) {
                contatos[index] = { ...contatos[index], ...contatoAtualizado };
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(contatos[index]));
            } else {
                res.writeHead(404, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Contato não encontrado" }));
            }
        });
    } else {
        res.writeHead(404, { "Content-Type" : "text/plain" });
        res.end("404 Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Servidor escutando a porta ${PORT}`);
})
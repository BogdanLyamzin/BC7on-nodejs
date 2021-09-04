const ws = new require("ws");

const wsServer = new ws.Server({port: 5000});

const clients = [];

wsServer.on("connection", (newClient)=> {
    // console.log("Новое подключение с фронтенда");
    clients.push(newClient);
    newClient.send(`Добро пожаловать! Вы наш ${clients.length} клиент.`);

    newClient.on("message", (message)=> {
        console.log(message);
    });

    clients.forEach(client => {
        if(client !== newClient) {
            client.send("К нам присоединился еще один человек!")
        }
    })
    // console.log(clients.length);
    // setTimeout(() => {
    //     newClient.send("Добро пожаловать!");
    // }, 5000);
});


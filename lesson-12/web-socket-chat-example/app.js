const ws = new require("ws");

const wsServer = new ws.Server({port: 5000});

clients = [];

wsServer.on("connection", (newClient)=> {

    clients.push(newClient);

    newClient.on("message", (data)=>{
        clients.forEach(client => {
            if(client !== newClient){
                client.send(data);
            }
        });
    });
});
import WebSocket, { WebSocketServer } from 'ws';



export const rooms = []

const wss = new WebSocketServer({
    port: 8080,
    perMessageDeflate: {
        zlibDeflateOptions: {
            // See zlib defaults.
            chunkSize: 1024,
            memLevel: 7,
            level: 3
        },
        zlibInflateOptions: {
            chunkSize: 10 * 1024
        },
        // Other options settable:
        clientNoContextTakeover: true, // Defaults to negotiated value.
        serverNoContextTakeover: true, // Defaults to negotiated value.
        serverMaxWindowBits: 10, // Defaults to negotiated value.
        // Below options specified as default values.
        concurrencyLimit: 10, // Limits zlib concurrency for perf.
        threshold: 1024 // Size (in bytes) below which messages
        // should not be compressed if context takeover is disabled.
    }
});


function updateClients(roomId, event, data=null) {
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            if (client.roomId == roomId) {
                client.send(JSON.stringify({ event, data }));
            }
        }
    });
}


wss.on('connection', function connection(ws) {

    ws.on('error', console.error);


    ws.on('message', function message(data, isBinary) {

        data = JSON.parse(data)

        if (data.event === 'create') {
            const roomId = Math.floor(100000 + Math.random() * 900000)
            rooms.push({ roomId, players: [] })
            ws.send(JSON.stringify({ event: "created", roomId }))
        }

        if (data.event === 'join') {
            const { roomId, playerName, uuid } = data
            const room = rooms.find(room => room.roomId == roomId)
            if (room) {
                room.players.push({ playerName, uuid })
                ws.roomId = roomId
                updateClients(roomId, 'update', room)
                ws.send(JSON.stringify({ event: "joined", joined: true }))
            }
            else {
                ws.send(JSON.stringify({ event: "joined", joined: false }))
            }
        }

        if (data.event === 'start') {
            const { roomId } = data
            updateClients(roomId, 'start')
        }

        if (data.event === 'nextQuestion') {
            const { roomId } = data
            updateClients(roomId, 'question', { question: "This is the question.", options: ["A", "B", "C", "D"] })
        }
    });

    ws.on('close', (c) => console.log(c))
});
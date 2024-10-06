import WebSocket, { WebSocketServer } from 'ws';
// import { v4 as uuidv4 } from 'uuid';


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

wss.on('connection', function connection(ws) {

    ws.on('error', console.error);
  

    ws.on('message', function message(data, isBinary) {

        data = JSON.parse(data)

        if (data.event === 'open') {
            ws.user = data
        }

        if (data.event === 'count') {
            ws.count = data.count

            const userData = []
            wss.clients.forEach(client => {
                userData.push({ name: client?.user?.name, count: client?.count, id: client?.user?.id })
            })

            wss.clients.forEach(function each(client) {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(userData));
                }
            });
        }
    });

    ws.on('close', (c) => console.log(c))
});
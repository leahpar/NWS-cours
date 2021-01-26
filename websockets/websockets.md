# Websockets

## Server-Sent Event (SSE)

Websocket unidirectionnelle

### Serveur

```
node sse/server
```

### Navigateur

http://localhost:3000/

### Client

```
curl  -H Accept:text/event-stream http://localhost:3000/countdown
```


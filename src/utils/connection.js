import DerivAPI from "@deriv/deriv-api";

const connection = new WebSocket('wss://frontend.binaryws.com/websockets/v3?l=EN&app_id=1234');

export const api = new DerivAPI({endpoint: 'ws.binaryws.com', app_id: 1234});


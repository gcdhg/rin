import http from "http";

export default (data) => http.createServer((req, res) => {
    res.end('hi')
});
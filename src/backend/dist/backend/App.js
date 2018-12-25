"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
class App {
    constructor(routers, PORT, STATIC_PATH) {
        this.routers = routers;
        this.PORT = PORT;
        this.STATIC_PATH = STATIC_PATH;
        this.app = express();
        this.app.use(bodyParser.json());
        this.routers.forEach(router => {
            this.app.use(router.paths.PATH_PREFIX, router.router);
        });
        this.app.use(express.static(this.STATIC_PATH));
        this.app.get('/*', (req, res) => {
            res.sendFile(path.join(this.STATIC_PATH, 'index.html'));
        });
    }
    listen() {
        this.app.listen(this.PORT, () => {
            console.log(`listening on port ${this.PORT}`);
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map
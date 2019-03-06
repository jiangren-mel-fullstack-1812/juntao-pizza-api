"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const testlab_1 = require("@loopback/testlab");
async function setupApplication() {
    const config = testlab_1.givenHttpServerConfig();
    // Set host to `HOST` env var or ipv4 loopback interface
    // By default, docker container has ipv6 disabled.
    config.host = config.host || process.env.HOST || '127.0.0.1';
    // Set port to `PORT` env var or `0`
    config.port = config.port || +(process.env.PORT || 0);
    const app = new __1.PizzaApiApplication({
        rest: config,
    });
    await app.boot();
    await app.start();
    const client = testlab_1.createRestAppClient(app);
    return { app, client };
}
exports.setupApplication = setupApplication;
//# sourceMappingURL=test-helper.js.map
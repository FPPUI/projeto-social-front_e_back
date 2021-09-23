module.exports = {
    apps: [
        {
            name: "projeto-social",
            script: "./src/server.js",
            env: {
                NODE_ENV: "production",
            }
        }
    ]
}

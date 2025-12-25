module.exports = {
  apps: [
    {
      name: "discord-bot",
      script: "index.js",
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
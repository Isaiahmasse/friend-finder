const path = require("path");

modules.exports = (app) => {
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", (req, res) => {
        res.sendile(path.join(__dirname, "../pubic/home.html"));
    });
};
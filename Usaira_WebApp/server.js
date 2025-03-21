const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const USERNAME = process.env.USERNAME || "Default User";

app.get('/', (req, res) => {
    res.send(`<h1>Welcome, ${USERNAME}!</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const bodyPasrer = require('body-parser');

const app = express();

app.use(bodyPasrer.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
});
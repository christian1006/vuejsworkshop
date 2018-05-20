let express = require('express');
let storage = require('./storage');
let app = express();
let cors = require('cors');
app.use(cors());

app.get('/animals', (req, res) => {
    res.send(storage.data);
});

app.get('/animals/:id', (req, res) => {
    let requestId = req.params.id;
    let animal = storage.data.find((animal) => animal.id == requestId);
    if (animal != undefined) {
        res.send(animal);
    } else {
        res.send({ error: 'animal does not exist' });
    }
});

app.listen(3000, () => {
    console.log("App running on port 3000")
})

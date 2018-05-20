let express = require('express');
let storage = require('./storage');
let app = express();

app.get('/animals', (req, res) => {
    res.send(storage.data);
});

app.listen(3000, () => {
    console.log("App running on port 3000")
})
const express = require('express');
const app = express();
const port = 3000;

app.get("https://Pharos.sh.com/", (req, res) => res.send('Notes App'));

app.listen(port, () => console.log(`notes-app listening on port ${port}!`));
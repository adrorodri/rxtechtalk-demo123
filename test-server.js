import express from 'express'
const app = express()
const port = 3000

app.get('/tienda', (req, res) => {
    console.log(req.url, req.query);
    const ingrediente = req.query.ingrediente;
    let response = { type: "unknown" };
    if (ingrediente === 'carne') {
        response = { type: "carne" };
    } else if (ingrediente === 'harina') {
        response = { type: "harina" };
    } else if (ingrediente === 'cilantro') {
        res.status(400);
        res.send("No era cilantro!! era perejil!!");
        return;
    } else if (ingrediente === 'perejil') {
        response = { type: "perejil" };
    }
    res.send(response);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
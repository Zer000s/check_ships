const sqlite3 = require('sqlite3')
const sqlite = require('sqlite')
const express = require('express')
const app = express()

app.use(express.json());

app.get('/2d492367-2a0a-4b59-95be-e7c3f41cf514', async function (req, res) {
    const db = await sqlite.open({filename: "./db.sqlite", driver: sqlite3.cached.Database});
    const data = await db.all(`SELECT * FROM first`);
    res.send(data);
})

app.post('/2d492367-2a0a-4b59-95be-e7c3f41cf514', async function (req, res) {
    const db = await sqlite.open({filename: "./db.sqlite", driver: sqlite3.cached.Database});
    let mass = req.body;
    let sql = `UPDATE first
                SET x = ?, y = ?
                WHERE id = ?`;
    mass.forEach(el => {
        db.run(sql, [el.x, el.y, el.id]);
    });
    res.send('Success!');
})



app.get('/f5f9048d-0204-4dfa-abb6-ab5006717100', async function (req, res) {
    const db = await sqlite.open({filename: "./db.sqlite", driver: sqlite3.cached.Database});
    const data = await db.all(`SELECT * FROM second`);
    res.send(data);
})

app.post('/f5f9048d-0204-4dfa-abb6-ab5006717100', async function (req, res) {
    const db = await sqlite.open({filename: "./db.sqlite", driver: sqlite3.cached.Database});
    let mass = req.body;
    let sql = `UPDATE second
                SET x = ?, y = ?
                WHERE id = ?`;
    mass.forEach(el => {
        db.run(sql, [el.x, el.y, el.id]);
    });
    res.send('Success!');
})



app.get('/8192daaf-059a-4660-8405-87eb4c32e669', async function (req, res) {
    const db = await sqlite.open({filename: "./db.sqlite", driver: sqlite3.cached.Database});
    const data = await db.all(`SELECT * FROM thirtd`);
    res.send(data);
})

app.post('/8192daaf-059a-4660-8405-87eb4c32e669', async function (req, res) {
    const db = await sqlite.open({filename: "./db.sqlite", driver: sqlite3.cached.Database});
    let mass = req.body;
    let sql = `UPDATE thirtd
                SET x = ?, y = ?
                WHERE id = ?`;
    mass.forEach(el => {
        db.run(sql, [el.x, el.y, el.id]);
    });
    res.send('Success!');
})

app.listen(3000)
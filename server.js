const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let users = []
let messages = []

function randomColor(){
    let number = Math.floor(Math.random()*16777215).toString(16);
    let color = "#" + number
    return color
}

app.get('/listen', (req, res) => {
    messages.push(res)

})

app.post('/newUser', (req, res) => {
    let { nickname } = req.body
    let color = randomColor()
    users.push({nickname, color})
    console.log(users)
    res.send(JSON.stringify(color))
    res.end()
  });



app.post('/message', (req, res) => {
    messages.map(res => {res.send(JSON.stringify(req.body))})
    messages = []
    res.end
  })

app.listen(PORT, () => {
    console.log(`nasłuchiwanie na porcie ${PORT}`);
  });
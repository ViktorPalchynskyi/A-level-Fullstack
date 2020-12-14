const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')

//база данных test
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

var db = mongoose.connection;

//схема - это структура документа коллекции. В сообщениях должны быть только nick и message
var messageSchema = new mongoose.Schema({
   nick: String,
   message: String
});

//создается КЛАСС по этой схеме
var Message = mongoose.model('Message', messageSchema);

db.on('error', console.error.bind(console, 'connection error:'));

//чтобы получать разобранный JSON в req.body
app.use(bodyParser.json())

//по REST: get отдает всё (или с лимитом)
app.get('/message', async (req, res) => res.send(await Message.find()))
//по id отдает 1 запись
app.get('/message/:id', async (req, res) =>
   res.send(
      await Message.findOne({ _id: mongoose.Types.ObjectId(req.params.id) }) //используем findOne для поиска записи по id
   )
)

//post - новая сущность (сообщение в этом примере)
app.post('/message', async (req, res) => {
   let newMessage = new Message(req.body) //создание сообщения с полями nick и message. Можно и newMessage.nick = req.body.nick
   await newMessage.save() //сохранение
   res.status(201).send(newMessage) //201 - Entity Created Code. Возвращаем запись из бд с _id
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/store', function (req, res, next) {
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.get('/store', function (req, res) {
    res.send('To jest sklep');
});

app.get('/first-view', function (req, res) {
    res.render('first');
});

app.get('/user-panel', function (req, res) {
    res.render('user', { message: 'yo!' });
})

app.listen(3000, function () {
    console.log('Listening on port 3000!');
});

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});

/*
138367431680-dhlsj6trk6knivuqrl3qdj2q8cm66m42.apps.googleusercontent.com
lLIKSbzqL07i9x0NSmtCk_sl
*/
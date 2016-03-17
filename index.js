var stockRepository = require('./stock-repository');
var app = require('./app')(stockRepository);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
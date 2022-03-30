const app = require('express')();

app.get('/', (req, res) => res.send('GamesBot - Bergo'));

module.exports = () => {
  app.listen(3000);
}



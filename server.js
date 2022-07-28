const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require('./models');
try {
  db.sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (err) {
  console.log('unable to connect to the database: ', err);
}

// テーブルが存在しない場合は作成される
db.sequelize.sync();
// { force: true } を渡すと、テーブルが既に存在する場合は最初に削除されてから作成される
// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and re-sync db.');
// });

// set routing
require('./routes/users.routes')(app);
require('./routes/tasks.routes')(app);
require('./routes/actions.routes')(app);

// set port, listen for requests
const PORT = process.env.NODE_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

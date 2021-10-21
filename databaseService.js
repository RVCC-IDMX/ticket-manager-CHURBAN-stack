/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
const chalk = require('chalk');

const log = console.log;
class DatabaseService {
    save(email, price, timestamp) {
        log(chalk.blue(`Running query: INSERT INTO orders VALUES (email, price, created) VALUES (${email}, ${price}, ${timestamp})`));
    }
}

module.exports = DatabaseService
/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
const chalk = require('chalk');

const log = console.log;

class EmailService {
  send(email) {
    log(chalk.green(`Sending email to ${email}`));
  }
}

module.exports = EmailService;

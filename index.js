/**
 * Created by crist on 01/05/2017.
 */
const app = require('./app');
require('./bin/www');
require('./config/database');
require('./config/routes')(app);
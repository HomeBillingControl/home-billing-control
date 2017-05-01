/**
 * Created by crist on 01/05/2017.
 */
const _ = require('lodash');
const Account = require('./../models/account');

Account.methods(['get', 'post', 'put', 'delete']);
Account.updateOptions({new: true, runValidators: true});

module.exports = Account;
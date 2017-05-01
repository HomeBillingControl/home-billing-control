/**
 * Created by crist on 01/05/2017.
 */
const restful = require('node-restful');
const mongoose = restful.mongoose;

const account = new mongoose.Schema({
  name: { type: String, required: true }
});

module.exports = restful.model('Account', account);
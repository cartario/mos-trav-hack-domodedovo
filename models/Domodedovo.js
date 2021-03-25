const {Schema, model} = require('mongoose');

const DomodedovoSchema = new Schema({
  title: String
}, {
  timestamps: true
})

module.exports = model('Domodedovo', DomodedovoSchema);

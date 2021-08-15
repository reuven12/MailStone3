const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
const Cat = mongoose.model('Cat', { name: String });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connect');
});
module.exports = mongoose;
//# sourceMappingURL=mongoose.js.map
/* jshint node: true */
/* jshint esversion: 6 */

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3678;

mongoose.connect(process.env.MONGODB, (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log('MongoDB OK.');
        app.listen(port, () => {
            console.log('API OK.');
        });
    }
});
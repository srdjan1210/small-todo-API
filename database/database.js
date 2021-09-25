const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect(process.env.DATABASE_URL, () => {
        console.log('Database conneccted');
    }).catch(err => { console.log(err)});
}

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


const roles = ['Admin', 'Common']
const dbConfig = require("./../config/db.config");

mongoose.connect(`mongodb://${dbConfig.HOST}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}//localhost/noderest'
).then(() => {
    console.log("Successfully connected to the database");
    populateRules(roles);
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
async function populateRules(roles) {
    const Role = require('./../models/role.model');
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            roles.forEach(element => {
                let role = new Role({
                    name: element
                }).save(err => {
                    if (err) {
                        console.log("error", err);
                    }
                    console.log(`role to ${element} added`);
                });

            });
        }
    });
}

module.exports = mongoose;
const {database} = require('../database/config')


/* database.query = util.promisify(database.query).bind(database);
 */

const userQuery = async (uid) => {

    const getUserQuery = 'SELECT user_id, user_password FROM `users` WHERE user_id = ' + uid + '';

    const [userData] = await database.query(getUserQuery).catch(err => {throw err});

    return userData;
}


module.exports = {
    userQuery
}
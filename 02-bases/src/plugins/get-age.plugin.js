
const getAgePluggin = require('get-age');

const getAge = (birthdate) => {

    if (!birthdate) return new Error('birthdate is required');

    return getAgePluggin(birthdate);

}

module.exports = {
    getAge
}
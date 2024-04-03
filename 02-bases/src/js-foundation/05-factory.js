// const { v4: uuidv4 } = require('uuid');
// const { getAge } = require('../plugins/get-age.plugin');
// const { uuidv4 } = require('../plugins/get-uuid.plugin');

// const { getAge, uuidv4 } = require('../plugins')

// const obj = { name: 'John', birthdate: '1983-03-09' };

const buildMakePerson = ({ uuidv4, getAge }) => {

    return ({ name, birthdate }) => {

        return {
            id: uuidv4(),
            name: name,
            age: getAge(birthdate)
        }

    }

}


// const john = buildPerson(obj);

// console.log(john);


module.exports = {
    buildMakePerson,
}
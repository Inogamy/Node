
// const { getAge, uuidv4 } = require('./plugins')
// const {emailTemplate} = require('./js-foundation/01-template');

// const { getUserByID } = require('./js-foundation/03-callback')

// require('./js-foundation/02-destructuring');
// require('./js-foundation/03-callback')

// const { gerUserByIDArrow } =require('./js-foundation/04-arrow-function')
// require('./js-foundation/05-factory');

// const getPokemonById = require('./js-foundation/06-promises');
const { buildLogger} = require('./plugins');

const logger = buildLogger('app.js');

logger.log('Hola mundo');
logger.error('Esto es algo malo');

// getPokemonById(50)
//     .then( (pokemon) => console.log({pokemon}))
//     .catch ((err) => console.log(err))
//     .finally( () => console.log('Finalmente'))
















// const { buildMakePerson } = require('./js-foundation/05-factory');

// const makePerson = buildMakePerson({uuidv4, getAge})

// const obj = { name: 'John', birthdate: '1983-03-09' };

// const john = makePerson(obj)

// console.log({john})

// console.log(emailTemplate);





// const id = 1;

// gerUserByIDArrow(id, (error, user) => {
//     if (error) {
//         throw new Error(error)
//     }
//     console.log(user)
// })

require('isomorphic-fetch');

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: 'Scott' };
    user['lastName'] = 'Gall';
    return user;
  },
  fetchUser: () => fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(data => data)
    .catch(err => 'error')
  
}

function fetchUser() { 
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => 'error')
}

fetchUser();

module.exports = functions;
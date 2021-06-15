const person = { name: 'Jack William', age: '17', job: 'facebooking', gfName: 'Emma Watson', address: 'Katabon', phone: '017047589', friends: ['Tom Hancks', 'Tom Cruise', 'Tom Yarn'] }

// person.salary = 30;
// const { gfName, phone, address, salary } = person;
// // const { phone } = person;


// console.log(gfName, phone, address, salary)
// console.log(gfName, phone, address)
// console.log(gfName, phone, address)
// console.log(gfName, phone, address)

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger Leader'
    }
}

const friends = ['sakin khan', 'arman khan', 'amin khan', 'salman khan', 'shahrukh khan']
const [first, nextFriend, ...olderF] = friends;
console.log(olderF)
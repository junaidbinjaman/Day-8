const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function() {
        return this.firstName, this.lastName
    },
    chargeBill: function(amount, tips, tax) {
        console.log(this)
        this.salary = this.salary - amount - tips - tax
        return this.salary
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000,

}


const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Golam',
    salary: 25000,

}

// normalPerson.chargeBill()
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(3000)
// console.log(heroPerson.salary, normalPerson.salary)


// const friendlyPersonChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyPersonChargeBill(1000)
// console.log(friendlyPerson.salary)

// normalPerson.chargeBill.call(heroPerson, 900, 100, 10)
// normalPerson.chargeBill.call(heroPerson, 3000, 300, 30)


// normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50)
// console.log(friendlyPerson.salary)

// normalPerson.chargeBill.apply(heroPerson, [5000, 500, 50])
const heroCharge = normalPerson.chargeBill.bind(heroPerson);
heroCharge(2000)
console.log(heroPerson.salary)
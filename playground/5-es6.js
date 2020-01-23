const person = {
    name : 'kuch bhi',
    age : 26,
    gender: 'm'
}

const { name:firstname, age, sex = 'M'} = person

console.log(firstname)
person.name = 'Somnath';
console.log(firstname);
console.log(sex);
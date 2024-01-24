const findTheOldest = function(people) {
    let age
    const year = new Date().getFullYear()
    const ages = people.map( (person) => {
        if (!(person.yearOfDeath)) {
            age = year - person.yearOfBirth
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        return age;
    })
    
    let max = Math.max(...ages)

    return people[ages.indexOf(max)]
};

// Do not edit below this line
module.exports = findTheOldest;

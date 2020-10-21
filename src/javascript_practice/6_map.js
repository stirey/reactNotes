const instructors = [
    { name: 'Quincy', specialty: 'Quantum Mechanics'},
    { name: 'Kenn', specialty: 'Norse Mythology'},
    { name: 'Paul', specialty: 'Tuvan throat singing'},
    { name: 'Aaron', specialty: 'Entomology' },
    { name: 'Carolyn', specialty: 'Kung Fu' }
]

//iterates over the above array and prints just the names of the instructors.
let instructor_names = [];

for (let i = 0; i < instructors.length; i++) {
    instructor_names.push(instructors[i].name);
}

console.log(instructor_names);

//use this from ES5
const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);

//exact same thing as above, different parameter name
const instructorNamesTwo = instructors.map(i => i.name);
console.log(instructorNames);

//practice
const instructorInfo = instructors.map(instructor => `${instructor.name}: ${instructor.specialty}`);
console.log(instructorInfo);

//more practice
//find practice question here
var kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }
];

console.log(kvArray);

var reformattedArray = kvArray.map(obj => {
    var rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
    return rObj;
})

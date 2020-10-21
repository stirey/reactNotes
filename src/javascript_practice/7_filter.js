const instructors = [
    { name: 'Aaron', specialty: 'Entomology', medals: 7 },
    { name: 'Carolyn', specialty: 'Kung Fu', medals: 5 },
    { name: 'Kenn', specialty: 'Norse Mythology', medals: 8 },
    { name: 'Paul', specialty: 'Tuvan throat singing', medals: 4 },
    { name: 'Quincy', specialty: 'Quantum Mechanics', medals: 2 },
    { name: 'Tom', specialty: 'Chemistry', medals: 3 }
]

    
let instructor_names = [];
//  manage index    check the length    increment
for (let i = 0; i < instructors.length; i++) {
    //create an empty array to push the names into as we iterate through
    if(instructors[i].medal >= 5){
        instructor_names.push(instructor[i].name);
    }
}
console.log(instructor_names);

//.filter function to make things more sleek for common tasks-reqyres a return value- the fat arrow takes care of that
//                                         this can be named anything(instructor)
const instructorNames = instructors.filter(instructor => instructor.medals >= 5);
console.log(instructorNames);
    
//practice code
const instructors = [
    { name: 'Aaron', specialty: 'Entomology', medals: 7 },
    { name: 'Carolyn', specialty: 'Kung Fu', medals: 5 },
    { name: 'Kenn', specialty: 'Norse Mythology', medals: 8 },
    { name: 'Paul', specialty: 'Tuvan throat singing', medals: 4 },
    { name: 'Quincy', specialty: 'Quantum Mechanics', medals: 2 },
    { name: 'Tom', specialty: 'Chemistry', medals: 3 }
]

const instructorInfo = instructors.filter(instructor => instructor.name[0]);
console.log(instructorInfo);
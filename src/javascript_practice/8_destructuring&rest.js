const array = ['thing', 42, false, {key: 'value'}, [1,2,3,4,undefined], NaN];

let stringVar = array[0];
let numVar = array[1];
let objVar = array[3];
let nanVar = array[array.length - 1];

console.log(stringVar, numVar, objVar, nanVar);

//below is how we can destructure the above code
//As you can see above, we can declare variables in what looks like our array square-bracket notation in our first line.  Using the square brackets following a let, const, or var, Javascript knows to interpret the brackets as variable assignment.  The values of these variables come from the specific ordered values in the 'array' array.  Notice the use of double commas in some places.  These double commas allow us to skip certain values of the array we don't care about.
let [string, num,, obj,, nan] = array;
console.log(string, num, obj, nan);


//SPREAD OPERATOR  
//it allows you to 'spread' out the values of an array (or object, as we'll see) into individual values that can be read in context. 
let newArr = ['a', 1, undefined, ...array];
console.log(newArr);


const testObj = {
    testString: 'stringy thingy',
    testNum: 23,
    testBool: true,
    testObject: {key: 'waluigi'},
    testArr: [1,2,3,4, undefined],
    testNan: NaN
}

const objString = testObj.testString;
const objNum = testObj.testNum;
const objObj = testObj.testObject;
const objNan = testObj.testNan;
console.log(objString, objNum, objObj, objNan);

//below is destructuring the above code
let {testString, testObject, testNum, testNan} = testObj;
console.log(testString, testNum, testObject,  testNan);

let newObj = {newString: 'more strings', anotherString: 'this is a string', ...testObj};
console.log(newObj)
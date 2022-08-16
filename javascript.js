// INHERITANCE AND PROTOTYPES

/**
 * Everything in javascript is object
 * Primitive [Numbers,Strings,Boolen,Undefined,null]
 * Object[Arrays,Function,Objects,Dates,Wrappers of Numbers,String and Boolean]
 * 
 * Object Oriented Programming->Objects interacting with one onather through methods
 *                              and properties
 * Used to store data, structure applications into module and keeping code clean
 * 
 *
 * Constractors(Class)-> Is blue print of an objects
 * 
 * Inheritance-> When object get access  to another objects
 * 
 * Prototype and Prototype Chain--> Inheritance works with something called prototype
 * Each object in JavaScript contain prototype
 * Every Object has Parents Prototype object->prototype->hasOwnProperty() isPropertyOF()
 * This senarior is called prototype chain 
 * JavaScript Start to find properties and methods in in constractor then finally 
 * to Parents Object Constractors then to null protype 
 *  
 * ############################# SUMMARY OF INHERITANCE ###################
 * 
 * Every JavaScript object has prototype.property which make inharitance possible
 * in JavaScript 
 * Prototype property of object is where we put methods and property that we want 
 * object to inherit 
 * Construtor prototype is NOT  properties of Constructor itself, it instance that
 * are created through it
 *  when certain method or property is called start from object itself and if not found
 *  it moves to seach moves to object prototype this will continues until it found 
 * this is all about  Prototype Chain 
 * #################################### END OF PROTOTYPE CHAIN ################
 * 
 * 
 * 
 * 
 * 



// Funciton Constuctor 


var john = {
    name:'john',
    yearOfBirth:123343,
    job: 'teacher'
};

// Function Constructor should be created in Capital Letter
var Person= function(name, yearOfBirth, job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
    this.calcAge=function(){
        console.log(2030-this.yearOfBirth);
    }
}

// New is Used to create brand new empty object

var john=new Person('john', 1990, 'Teacher');
john.calcAge();

var jane= new Person('jane',2000, 'Student')
jane.calcAge()

// Return True to check if it belongs particular john.__proto__===Person.prototype
// Use Object Prototype to john objects





// Creating Objects  with Object create 

var personProto={

    calculateAge:function(){

        console.log(2020- this.birthYear);

    }
};

var john=Object.create(personProto);
john.name='john';
john.birthYear=1990;
john.job='Teacher';


var jane=Object.create(personProto);
jane.name='jane';
jane.birthYear=2000;
jane.job='Student';


// Special way of creat object

var methew=Object.create(personProto,{

    name:{value:'methew'},
    birthYear:{value:1990},
    job:{value:'teacher'}

});

// Speficed which one is best way of create object then specified about complex inheritance
// Structure 



// Comparitive between primitive and object in JavaScript

// Primitive  Datatypes

var a=23;
var b=a;
b=46;
console.log(b) // return 46
console.log(a) // return 23

// Object Datatypes

var obj1={
    name:'jafary',
    age:29
};

var obj2=obj1;

obj1.age=30;

console.log(obj1.age) // return 30
console.log(obj2.age) // return 30


// Function 

var age=27;

var object1={
    name:'jafary',
    city:'arusha'
}

function change(a,b){
    a=30;
    b.city='Dar-es-salaam'
}
change(age,object1);

console.log(age)          // remain same values of functions
console.log(object1.city) // reference to object of function




// OBJECT FUNCTION JAVASCRIPT

* A function is an instance of the object type
* Function behave like objects
* We can store function in variable
* We can pass a function as an arguments in another functions
* We can return function to another functions






// PASSING  FUNCTIONS AS ARGUMENTS 


var years= [1900,1965,1937,2005,1998];

function arrayCalc(arr,fn){
    var arrRes =[];
    for(var i=0; i<arr.length; i++){

        arrRes.push(fn(arr[i]));

    };
    return arrRes;
};

function  calculateAge(el){
   
    return 2016-el;  

};

var ages= arrayCalc(years, calculateAge)



// Function Return Function 

function InterviewQuestion(job){
    
    if (job==='designer'){
        return function(name){
            console.log(name + ", Can you explain what is UX design is ?");
        }
    }
    else if (job==='teacher'){
        return function (name){
             console.log(name + ", What subject your are teaching for?");
        }
    }
    else{
        return function(name){
            console.log(name +", Your job is not there please choose another job");
        }
    }
}

var teacherQuestion=InterviewQuestion('teacher');
teacherQuestion('John');
var  designerQuestion=InterviewQuestion('designer');
designerQuestion('jafary');


InterviewQuestion('teacher')('Mary');
InterviewQuestion('Farmer')('Juliana')




// IMMEDIATELY INVOKE FUNCTION  EXPRESSION 


function game(){
    var score=Math.random()* 10;
    console.log(score>=5);
}
game();


// Solving Problem using immediately invoke function expression


(function(){

    var score=Math.random()*10;
    console.log(score>=7);

})();

(function(goodluck){
    var score=Math.random()*10;
    console.log(score>=8-goodluck);
})(5);


 */


// Closure 

// Global Excution Context
function reteirement(retierementAge){ // reteirement Scope [ reteirementAge(), a]
    var a='year remained until retirement';

     return function(yearOfBirth)  // New Excution Context [retierementAgeUs] Hence 
                                   // Hence Magic happen you can use [ reteirementAge(), a]
     {
        var age=2029-yearOfBirth;
        console.log(retierementAge-age) + " " +a;
     }
}

var retiermentAgeUs=reteirement(65);
retiermentAgeUs(1995);
var retierementAgeGermany=reteirement(66);
retierementAgeGermany(1997);
var retierementAgeIceland=reteirement(67);
retierementAgeIceland(1970);


/* ################# CLOSURE SUMMARY #################

-- Closure inner function has always access varible and parametes
   of its outer function, even after the outer function has returned


#################### PROBLEM OF INTERVIEW QUESTION WITH HELPS OF CLOSUER ###############



function InterviewQuestion(job){

    return function(name){
        if (job==='designer'){

            console.log(name +" What is UI and UX designing?");

        }
        else if (job==='teacher'){
            console.log(name + " What subject are you specilized?");
        }

        else{
            console.log(name + " Sorry your job is not there find another job");
        }
    }

}

InterviewQuestion('teacher')('john')


*/

/** BIND CALL AND APPLY
 * 
 * 
 */


var john={
    name:'John',
    age:26,
    job:'Teacher',
    presentation:function(style,timeOfDay){
        if (style=='formal'){
            console.log("Goodmornig " + timeOfDay + " Ladies & Gentlemen: I\`m " + this.name + " I\`m " + this.job + " I have  " + this.age + ' years old')
        }
        else if(style=='friendly'){

            console.log("Hey there What\`s Up " + timeOfDay + " Ladies & Gentlemen: I\`m " + this.name + " I\`m " + this.job + " I have  " + this.age + ' years old')
        }
        else{

        }
    }

};

var jafary={
    name:'Jafary',
    age:27,
    job:'Designer'
}
var methew={
    name:'Methew',
    age:26,
    job:'Engineer'
}
var innocent={
    name:'Innocent',
    age:28,
    job:'Telecommunication Engineer'
}

// USING CALL METHOD TO USE ANOTHER OBJECTS\

john.presentation.call(jafary, 'friendly','afternoon'); // Call('object_name', argrument_object_fn)

// USING APPLY METHOD TO USE ANOTHER OBJECTS
john.presentation.apply(methew,['formal', 'Evening']) // apply('object_name', arrays_object_fn)

john.presentation('formal','Morning');

// USING BINDING METHOD TO USE ANOTHER OBJECTS

var johnFriendly=john.presentation.bind(john, 'formal') // bind ('object', 'argruments_fn')
johnFriendly('Morning');
johnFriendly('Night');


var innocentFriendly=john.presentation.bind(innocent, 'friendly');
innocentFriendly('Morning');




















































































































 

























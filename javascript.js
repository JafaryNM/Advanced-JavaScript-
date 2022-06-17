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
 */


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















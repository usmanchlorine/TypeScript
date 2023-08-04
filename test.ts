// const add=(a:number,b:number)=>{
//     console.log(a+b);
// }

// add(3,6)

//const num:number=15000;

//const isTrue:boolean=true;

// ts-node is required for typescript

// type inference

var x: 5 = 5; // the x is now  type 5 only 5  will be assinged in the x value

console.log(x);

interface user {
  // creating a interface
  name: string;
  id?: number;
  pincode?: string;
}

const myObject: user = {
  name: "usman",
  id: 1235,
  pincode: "chicken",
};

const myObject2: user = {
  name: "zinger tikka ",
  pincode: "32145#213$",
};

// const onSubmit = (name, id) => {};

// myObject.name;
// myObject.id;

// do not give any type to the  array [user,name,broast,tikka]

let role: string[] = ["admin", "CEO"]; // assinging the string in the array



caller(); /// hoisting hogaye aam function mai hoisitng possible hai 


function caller():undefined{ /// we can make undefined return of te fucntion 
  console.log("hello world ")
}



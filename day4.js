//array
let num1=[1,2,"three",true];
let names=new Array("john","james");
console.log(num1[2]);
console.log(names.length);
//filter() -it filtered the result arguments
let num2=[1,2,3,4,5];
let result=num2.filter(num2 => num2[0]);
console.log(result);
//slice - delete the element based on index value
let num3=[1,2,3,4,5];
num3.splice(1,3,"hii");
console.log(num3);
let r=num3.slice(1,2,"html")
console.log(r);
//object
let details={
    name:"js",
    totalmark:"90",
    //nested obj
    subject:{
        dbms:96,
        java:99,
    },
    avg:function(){
        let sum=parseInt (this.subject.dbms+this.subject.java);
        return sum;
    }
}
console.log(details.totalmark);
console.log(details["name"]);
console.log(details.subject.dbms);
console.log(details.subject["java"]);
console.log(details.avg());

//const person={
  //  name:"makeshwari",
    //age:18,
    //city:"coimbatore"
//};
//destructuring
//const{name,age,city}=person;
//console.log(name);
//console.log(age);
//console.log(city);

//array deatructing
const person=["jennie",29,"designation"];
const[name,age,designation]=person;
console.log(name+" "+age+" "+designation+" ");

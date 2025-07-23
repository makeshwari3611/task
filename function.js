//let a=10
function say(){
    let name="javascript"
    console.log("hi glodal scope");
   console.log("within the func" + name);
}
say()
console.log("outside the func" + name)
//global scope can be used anywhere in script
//local scope(same as function or block scope depending on context)

//within the block that is between the curly braces
//let and const is used only inside the func
//var can be used outside the func
function voting(age){
    if(age>=18){
        let iscloudy=true;
        var israining=true;
        console.log("eligible");
        console.log(iscloudy);
    }
    console.log(israining);
    //console.log(iscloudy);//throw error
}
voting(18)
//callback function
function text(){
    console.log("message");

}
text();
 function send(callback){
    console.log("message sended");
    setTimeout(callback,2000);
 }
 send(text);

 let count=0;
 let Interval=()=>{
    count++;

    console.log(count);
    if(count < 5){
        Interval();
    }
 }
 Interval();

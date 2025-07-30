let employees=[];
//add emp
function addEmp(id,name,salary){
    employees.push({id,name,salary});
    console.log("employee added",employees);

}
addEmp(1,"jennie",40000)
addEmp(2,"rosie",50000)
addEmp(3,"emily",20000)

//to update emp
 function updateEmp(id,newDetail){
    const emp=employees.find(e=> e.id === id)
    if(emp){
        Object.assign(emp , newDetail);
        console.log("updated",employees);
    }else{
        console.log("employee not found");
    }
 }
 updateEmp(3,{name:"sana"});
 //delete emp
 function removeEmp(id){
    const index=employees.findIndex(e =>e.id === id);
    if(index !== -1){
        employees.splice(index,id)
        console.log("employee removed",employees)

    }else{
        console.log("employee not found");
    }
 }
 removeEmp(1)
 //calculate total salary
 function totalSalary(){
    const total=employees.reduce((sum,emp)=>sum+emp.salary,0);
    console.log("total salary is",total);

 }
 totalSalary()
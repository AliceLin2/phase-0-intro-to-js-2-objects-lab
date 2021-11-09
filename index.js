// Write your solution in this file!
let employee={};
function updateEmployeeWithKeyAndValue(Object, key, value){
    let newObject={...Object};
    newObject[key]=value;
    return newObject;
}
function destructivelyUpdateEmployeeWithKeyAndValue(Object, key, value){
    Object[key]=value;
    return Object;
}
function deleteFromEmployeeByKey(Object, key){
    let newObject={...Object};
    delete newObject[key];
    return newObject;
}
function destructivelyDeleteFromEmployeeByKey(Object, key){
    delete Object[key];
    return Object;
}
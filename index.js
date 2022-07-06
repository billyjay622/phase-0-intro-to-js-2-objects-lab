const employee = {
    name: "John",
    streetAddress: "7 Kensington Road, Scarsdale, NY 10583",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
const newObj = {...employee, "name": "Sam", "streetAddress": "11 Broadway" }
    return newObj
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newObj2 = {...employee[key]}
    delete newObj2[key]
    return newObj2
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}

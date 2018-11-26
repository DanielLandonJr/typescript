function getSum(num1, num2) {
    return num1 + num2;
}
// console.log(getSum(1, 4));
var mySum = function (num1, num2) {
    if (typeof num1 === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
// console.log(mySum(3, 5));
// question mark sets the param as optional
var getName = function (firstName, lastName) {
    if (!lastName) {
        lastName = '';
    }
    return firstName + " " + lastName;
};
console.log(getName('Arthur'));
var myVoid = function () { };

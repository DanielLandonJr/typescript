let myString: string = 'Hello World';
let myNum: number = 22;
let myBool: boolean = true;
// let strArray: string[] = ['Hello', 'World'];
let strArray: Array<string> = ['Hello', 'World'];
// let numArray: number[] = [1, 2, 3];
let numArray: Array<number> = [1, 2, 3];
// let anyArray: any[] = [1, 2, 3, 'Hello'];
let anyArray: Array<any> = [1, 2, 3, 'Hello'];
// fixed length array that must match the supplied pattern. If you add more to the end after the matched pattern it turns from a tuple to a union???
let strNumTuple: [string, number] = ['hello', 1];
// can be null or undefined
let myVoid: void = null;
let myNull: null = null;
let myUndefined: undefined = undefined;

console.log(myString);
console.log(myNum);
console.log(myBool);
console.log(strArray);
console.log(numArray);
console.log(anyArray);
console.log(strNumTuple);
console.log(myVoid);

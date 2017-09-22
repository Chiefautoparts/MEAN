
// // object constructor
// MyNode = (function () {
//     function MyNode(val) {
//         this.val = 0;
//         this.val = val;
//     }
//     MyNode.prototype.doSomething = function () {
//         this._priv = 10;
//     };
//     return MyNode;
// }());
// myNodeInstance = new MyNode(1);
// console.log(myNodeInstance.val);
// function myFunction() {
//     console.log("Hello World");
//     return;
// }
// function sendingErrors() {
// 	throw new Error('Error message');
// }

var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: number[] = [1,2,3,4];
var myObj = {
    "name": 'Bill'
};
var anythingVariable: any = "hey";
var anythingVariable: any = 25;
var arrayOne: boolean[] = [true, false, true, false];
var arrayTwo: any[] = [1, 'abc', true, 2];
var myObj = {
    "x": 5,
    "y": 10
};

class MyNode {
    val: number;

    constructor(value: number){
        this.val = value;
    }
    doSomething(){
        this._priv: number = 10;
    }
    }
}



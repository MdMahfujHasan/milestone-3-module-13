// var friendsAge = [21, 20, 23, 25, 26];
// var mahfujAge = friendsAge[2];
// console.log(mahfujAge)

// friendsAge[2] = 24;
// console.log(friendsAge)

// var index = friendsAge.indexOf(25);
// console.log(index)

// console.log(friendsAge);
// friendsAge.push(22,27);
// console.log(friendsAge);
// console.log(friendsAge.length);
// friendsAge.pop();
// console.log(friendsAge)

// var chaLine=['rajib', 'sajib', 'saad', 'palash', 'hasan'];
// console.log(chaLine)
// chaLine.push('mahfuj');
// console.log(chaLine)
// chaLine.pop();
// chaLine.shift();
// chaLine.unshift('tomal');
// console.log(chaLine);
// part = chaLine.slice(2,4);
// console.log(part);

// var num = 0;
// while(num < 10){
//     console.log(num);
//     num++;
// }

// for(var i=0; i<10; i++){
//     console.log(i);
// }

// var nums = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// for(i=0; i<nums.length; i++){
//     var element = nums[i];
//     console.log(element);
// }

// var names = ['a', 'b', 'c', 'd', 'e'];
// for(i=0; i<names.length; i++){
//     element = names[i];
//     console.log(element);
// }

// num = 5;
// switch(num){
//         case 1000:
//         console.log('i am 1000');
//         break;
//         case 100:
//         console.log('i am 100');
//         break;
//         case 20:
//         case 10:
//         console.log('i am either 20 or 10');
//         break;
//         default:
//         console.log('dont know who you are');
// }

// function drinkWater(){
//     console.log('cold water');
//     console.log('warm water');
// }
// drinkWater();

// function doubleIt(num){
//     result = num * 2;
//     return result;
// }
// var first = doubleIt(5);
// var second = doubleIt(10);
// var total = first + second;
// console.log(total);

// function add(num1, num2){
//     var result = num1 + num2;
//     return result;
// }
// var sum = add(5, 7);
// console.log(sum);

var student1 = { id:142, name:"mahfuj", phone: 41018};
var student2 = { id:192, name:"hasan", phone: 23018};
var phoneNo1 = student2.phone;
var phoneNo2 = student2["phone"];
var phonePropName = "phone";
//updated phone num
student2.phone = 92801;
student2["phone"] = 92703;
student2.address = "abc";
student2["address"] = "abc";
console.log(student1);
console.log(phoneNo);

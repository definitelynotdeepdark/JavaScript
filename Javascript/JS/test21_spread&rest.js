/*1.ให้เขียนโค้ดเพื่อรวม Array สองชุดเข้าด้วยกัน โดยใช้ Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
 รวม arr1 และ arr2 ให้ได้ Array ใหม่ชื่อ combinedArr
/const combinedArr = [...arr1,...arr2];
console.log(combinedArr);



.2ให้เขียนโค้ดเพื่อรวม Object สองตัวเข้าด้วยกัน โดยใช้ Spread Operator
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
 รวม obj1 และ obj2 ให้ได้ Object ใหม่ชื่อ combinedObj
const combinedObj = {...obj1,...obj2};
/console.log(combinedObj);



//3.ให้เขียนฟังก์ชันที่รับค่าตัวเลขไม่จำกัดจำนวน และคืนผลรวมของค่าทั้งหมด
function sumNumbers(...Numbers){
    let result = 0;
    for(let number of Numbers){
        result += number;
    }
    console.log(result);
}

sumNumbers(1,2,3,4,5,6,7,8,9,10);


//4.ให้แยก key name ออกจาก Object และเก็บ key ที่เหลือไว้ในตัวแปร rest
const person = { name: "Alice", age: 25, city: "Bangkok" };

const { name, ...rest } = person;
console.log(rest);

//5.ให้เขียนฟังก์ชันที่รับค่าหลายตัว และสร้าง Array ใหม่ โดยเพิ่มค่าคงที่ 100 เข้าไปก่อนหน้าค่าที่ส่งเข้ามา
function addConstant(...cons){
 cons.unshift(100);
 console.log(cons)
}
addConstant(1,2,3)*/

//GPT Ans
function addConstant(...cons) {
    const result = [100, ...cons]; // สร้าง Array ใหม่ที่เพิ่ม 100 เข้าไป
    console.log(result); // แสดงผลลัพธ์
  }
  
  addConstant(1, 2, 3); // ผลลัพธ์: [100, 1, 2, 3]
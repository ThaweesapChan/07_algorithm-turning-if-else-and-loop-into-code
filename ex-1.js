/* 
ให้เขียน Function ที่ชื่อว่า sumPositiveNumbers ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ numbers ซึ่งเป็น Array ที่บรรจุตัวเลข
    - Function นี้จะนำเฉพาะตัวเลขที่มีค่าเป็นบวกมารวมกัน แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ในโค้ดด้านล่าง
*/
function sumPositiveNumbers(number) {
  let sum = 0;

  for (let i = 0; i < number.length; i++) {
    if (number[i] > 0) {
      sum += number[i]; // add only positive numbers
    }
  }

  console.log(sum);
  return sum;
}



const numbers1 = [3, -5, 10, 12, -7, 0, 8, 2];
console.log(sumPositiveNumbers(numbers1)); // 35

const number2 = [0, -4, -1, -5, 6, 5, 0];
console.log(sumPositiveNumbers(number2)); // 11

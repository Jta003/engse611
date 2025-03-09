// สร้างอาร์เรย์ของตัวเลข
let numbers = [10, 20, 30, 40, 50];

// แสดงอาร์เรย์ทั้งหมด
console.log("Array:", numbers);

// วนลูปผ่านอาร์เรย์และแสดงค่าทีละตัว
console.log("Elements in Array:");
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

// เพิ่มค่าเข้าไปในอาร์เรย์
numbers.push(60);
console.log("After push:", numbers);

// ลบค่าตัวสุดท้ายออกจากอาร์เรย์
numbers.pop();
console.log("After pop:", numbers);

// ค้นหาค่าภายในอาร์เรย์
let findNumber = 30;
let index = numbers.indexOf(findNumber);
if (index !== -1) {
    console.log(`${findNumber} found at index ${index}`);
} else {
    console.log(`${findNumber} not found in array`);
}

// ตัวอย่างการใช้เมธอดของอาร์เรย์ใน JavaScript

let numbers = [5, 10, 15, 20, 25];

console.log("Original Array:", numbers);

// ใช้ map() เพื่อสร้างอาร์เรย์ใหม่ที่มีค่าคูณ 2
let doubled = numbers.map(num => num * 2);
console.log("After map (x2):", doubled);

// ใช้ filter() เพื่อคัดกรองค่าที่มากกว่า 10
let filtered = numbers.filter(num => num > 10);
console.log("After filter (>10):", filtered);

// ใช้ reduce() เพื่อหาผลรวมของอาร์เรย์
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum using reduce:", sum);

// ใช้ find() เพื่อหาค่าที่มากกว่า 10 ตัวแรกที่พบ
let found = numbers.find(num => num > 10);
console.log("First number > 10 using find:", found);

// ใช้ some() เช็คว่ามีค่ามากกว่า 20 หรือไม่
let hasGreaterThan20 = numbers.some(num => num > 20);
console.log("Has number > 20 using some:", hasGreaterThan20);

// ใช้ every() เช็คว่าทุกค่ามากกว่า 0 หรือไม่
let allGreaterThanZero = numbers.every(num => num > 0);
console.log("All numbers > 0 using every:", allGreaterThanZero);

// ใช้ sort() เพื่อเรียงลำดับค่า
let sorted = [...numbers].sort((a, b) => a - b);
console.log("Sorted Array:", sorted);

// ใช้ reverse() เพื่อเรียงลำดับแบบกลับหลัง
let reversed = [...numbers].reverse();
console.log("Reversed Array:", reversed);

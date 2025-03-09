// ตัวอย่างการใช้ Destructuring และการตั้งชื่อใหม่ใน JavaScript

// Destructuring จากอาร์เรย์
let colors = ["red", "green", "blue"];
let [firstColor, secondColor, thirdColor] = colors;
console.log("First Color:", firstColor);
console.log("Second Color:", secondColor);
console.log("Third Color:", thirdColor);

// Destructuring จากออบเจ็กต์ พร้อมการตั้งชื่อใหม่
let person = { name: "John", age: 25, country: "USA" };
let { name: userName, age: userAge, country: userCountry } = person;
console.log("User Name:", userName);
console.log("User Age:", userAge);
console.log("User Country:", userCountry);

// ใช้ค่าเริ่มต้นในกรณีที่ไม่มีข้อมูล
let { city = "Unknown" } = person;
console.log("City:", city);

// การใช้ Rest Parameter กับ Destructuring
let [primary, secondary, ...remainingColors] = colors;
console.log("Primary Color:", primary);
console.log("Secondary Color:", secondary);
console.log("Remaining Colors:", remainingColors);

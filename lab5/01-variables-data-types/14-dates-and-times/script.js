// Example 1: Creating Dates
console.log("Example 1: Creating Dates:");

let currentDate = new Date();  // Current date and time
let specificDate = new Date(2025, 2, 9);  // March 9, 2025 (Month is 0-indexed)
let specificDateWithTime = new Date(2025, 2, 9, 14, 30);  // March 9, 2025 at 2:30 PM

console.log("Current Date:", currentDate);
console.log("Specific Date:", specificDate);
console.log("Specific Date with Time:", specificDateWithTime);

// Example 2: Getting Date and Time Components
console.log("\nExample 2: Getting Date and Time Components:");

console.log("Year:", currentDate.getFullYear());    // Get the year
console.log("Month:", currentDate.getMonth() + 1);  // Get the month (1-indexed)
console.log("Date (Day of the month):", currentDate.getDate()); // Get the day of the month
console.log("Day (0 = Sunday, 1 = Monday, ...):", currentDate.getDay());  // Get the day of the week
console.log("Hours:", currentDate.getHours());      // Get the hour
console.log("Minutes:", currentDate.getMinutes());  // Get the minutes
console.log("Seconds:", currentDate.getSeconds());  // Get the seconds
console.log("Milliseconds:", currentDate.getMilliseconds());  // Get the milliseconds

// Example 3: Setting Date and Time Components
console.log("\nExample 3: Setting Date and Time Components:");

let dateToModify = new Date();

// Set the year to 2022, month to June (5), day to 15
dateToModify.setFullYear(2022);
dateToModify.setMonth(5); // June (Months are 0-indexed, so 5 is June)
dateToModify.setDate(15);

console.log("Modified Date:", dateToModify);

// Example 4: Date Operations
console.log("\nExample 4: Date Operations:");

let date1 = new Date(2025, 2, 9);  // March 9, 2025
let date2 = new Date(2025, 2, 15); // March 15, 2025

let timeDifference = date2 - date1; // Difference in milliseconds
let daysDifference = timeDifference / (1000 * 3600 * 24);  // Convert to days

console.log("Time difference in milliseconds:", timeDifference);
console.log("Time difference in days:", daysDifference);

// Example 5: Date Formatting
console.log("\nExample 5: Date Formatting:");

console.log("Current Date in ISO format:", currentDate.toISOString());  // ISO format (e.g., 2025-03-09T14:30:00.000Z)
console.log("Current Date toLocaleString:", currentDate.toLocaleString()); // Localized date and time string
console.log("Current Date toString:", currentDate.toString());  // Default string representation

// Example 6: Working with Timestamps
console.log("\nExample 6: Working with Timestamps:");

let timestamp = currentDate.getTime(); // Get timestamp (milliseconds since Jan 1, 1970)
console.log("Current Timestamp:", timestamp);

// Example 7: Comparing Dates
console.log("\nExample 7: Comparing Dates:");

let dateA = new Date(2025, 2, 9);  // March 9, 2025
let dateB = new Date(2025, 2, 9);  // March 9, 2025
let dateC = new Date(2025, 2, 10); // March 10, 2025

console.log("dateA is equal to dateB:", dateA.getTime() === dateB.getTime());  // Compare timestamps
console.log("dateA is before dateC:", dateA < dateC);  // Compare dates
console.log("dateC is after dateA:", dateC > dateA);  // Compare dates

// Example 1: Creating a Date Object
console.log("Example 1: Creating a Date Object:");

let date1 = new Date(); // Current date and time
let date2 = new Date(2025, 2, 9);  // March 9, 2025 (Months are 0-indexed)
let date3 = new Date(2025, 2, 9, 14, 30); // March 9, 2025, 2:30 PM

console.log("Current Date:", date1);
console.log("Specific Date:", date2);
console.log("Specific Date with Time:", date3);


// Example 2: Date Methods for Getting Date Components
console.log("\nExample 2: Getting Date Components:");

console.log("Year:", date1.getFullYear());     // Get the full year (e.g., 2025)
console.log("Month:", date1.getMonth() + 1);   // Get the month (1-indexed, so 3 is March)
console.log("Day of Month:", date1.getDate());  // Get the day of the month (e.g., 9)
console.log("Day of Week (0=Sunday, 6=Saturday):", date1.getDay());  // Get the day of the week (0-6)
console.log("Hours:", date1.getHours());        // Get the hour of the day (0-23)
console.log("Minutes:", date1.getMinutes());    // Get the minutes (0-59)
console.log("Seconds:", date1.getSeconds());    // Get the seconds (0-59)
console.log("Milliseconds:", date1.getMilliseconds()); // Get the milliseconds (0-999)


// Example 3: Date Methods for Setting Date Components
console.log("\nExample 3: Setting Date Components:");

let dateToModify = new Date(2025, 2, 9); // March 9, 2025
console.log("Original Date:", dateToModify);

// Set new date components
dateToModify.setFullYear(2023); // Set the year to 2023
dateToModify.setMonth(10);      // Set the month to November (10 is November, since it's 0-indexed)
dateToModify.setDate(25);       // Set the date to 25
dateToModify.setHours(18);      // Set the hour to 6 PM (18)
dateToModify.setMinutes(45);    // Set minutes to 45
dateToModify.setSeconds(30);    // Set seconds to 30

console.log("Modified Date:", dateToModify);


// Example 4: Date Methods for Date Comparisons
console.log("\nExample 4: Comparing Dates:");

let dateA = new Date(2025, 2, 9);  // March 9, 2025
let dateB = new Date(2025, 2, 9);  // March 9, 2025
let dateC = new Date(2025, 2, 10); // March 10, 2025

console.log("dateA is equal to dateB:", dateA.getTime() === dateB.getTime());  // Compare timestamps
console.log("dateA is before dateC:", dateA < dateC);  // Compare dates
console.log("dateC is after dateA:", dateC > dateA);  // Compare dates


// Example 5: Date Methods for Date Formatting
console.log("\nExample 5: Date Formatting:");

let dateForFormat = new Date();

// Get the date in ISO format
console.log("Date in ISO format:", dateForFormat.toISOString()); // Format like: "2025-03-09T12:34:56.789Z"

// Get the date in local format
console.log("Date in Local Format:", dateForFormat.toLocaleString()); // Locale-specific format like "3/9/2025, 12:34:56 PM"

// Get the default string representation of the date
console.log("Date toString:", dateForFormat.toString());  // Default format like: "Sun Mar 09 2025 12:34:56 GMT+0000 (Coordinated Universal Time)"


// Example 6: Date Methods for Timestamps
console.log("\nExample 6: Working with Timestamps:");

let timestamp = dateForFormat.getTime(); // Get the timestamp in milliseconds (since Jan 1, 1970)
console.log("Current Timestamp (milliseconds since Jan 1, 1970):", timestamp);


// Example 7: Date Methods for Getting and Setting UTC Time
console.log("\nExample 7: UTC Time Methods:");

let utcDate = new Date();

// Get the UTC components
console.log("UTC Year:", utcDate.getUTCFullYear());
console.log("UTC Month:", utcDate.getUTCMonth() + 1);  // 0-indexed
console.log("UTC Date:", utcDate.getUTCDate());
console.log("UTC Hours:", utcDate.getUTCHours());
console.log("UTC Minutes:", utcDate.getUTCMinutes());

// Set the UTC components
utcDate.setUTCFullYear(2023);
utcDate.setUTCMonth(11); // December
utcDate.setUTCDate(25);
utcDate.setUTCHours(10);
utcDate.setUTCMinutes(30);
console.log("Modified UTC Date:", utcDate);


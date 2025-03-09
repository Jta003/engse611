// Define a function with parameters for title, author, and status
function updateBookStatus(title, author, own, reading, read) {
    const book = {
      title: title,
      author: author,
      status: {
        own: own,
        reading: reading,
        read: read,
      },
    };
  
    console.log(book);
  }
  
  // Call the function with arguments
  updateBookStatus("The Road Ahead", "Bill Gates", true, true, true);
  updateBookStatus("Steve Jobs", "Walter Isaacson", true, false, true);
  updateBookStatus("Mockingjay: The Final Book of The Hunger Games", "Suzanne Collins", true, false, true);
  
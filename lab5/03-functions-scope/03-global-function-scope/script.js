// Global object that holds book information
const library = [
    {
      title: 'The Road Ahead',
      author: 'Bill Gates',
      status: {
        own: true,
        reading: true,
        read: false,
      },
    },
    {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      status: {
        own: true,
        reading: false,
        read: true,
      },
    },
  ];
  
  // Function that updates the status of a book using the global library array
  function updateBookStatus(index, own, reading, read) {
    if (library[index]) {
      library[index].status.own = own;
      library[index].status.reading = reading;
      library[index].status.read = read;
      console.log(`Updated Book: ${library[index].title} by ${library[index].author}`);
      console.log(library[index]);
    } else {
      console.log("Invalid book index.");
    }
  }
  
  // Call the function with arguments to update the books' status
  updateBookStatus(0, true, true, true);
  updateBookStatus(1, true, false, true);
  updateBookStatus(2, true, false, true);
  
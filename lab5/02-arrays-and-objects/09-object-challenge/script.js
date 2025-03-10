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
  
  // Correcting the indices for the books you want to update
  library[0].status.read = true;
  library[1].status.read = true;
  // You don't need to modify library[3] since it doesn't exist
  console.log(library);
  
import axios from 'axios';

const newUser = {
  id: 1, // Puedes asignar un ID único aquí
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com"
};

axios.post('http://localhost:3000', newUser)
  .then(response => {
    console.log('Usuario añadido:', response.data);
  })
  .catch(error => {
    if (error.response) {
      console.error('Error al añadir usuario:', error.response.data);
    } else {
      console.error('Error al añadir usuario:', error.message);
    }
  });


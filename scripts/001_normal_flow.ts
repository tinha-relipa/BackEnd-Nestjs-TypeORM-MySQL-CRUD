import axios from 'axios';

const baseUri = "http://localhost:4000"

async function createNewUser() {
  try {
    const response = await axios.post(`${baseUri}/users`, {
      username: 'John Doe',
      password: 'abcxyz',
    });
    console.log('New user created:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating new user:', error);
  }
}

async function updateUser(id: number) {
  try {
    const response = await axios.patch(`${baseUri}/users/${id}`, {
      username: 'John',
    });
    console.log('User updated:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
  }
}

async function deleteUser(id: number) {
  try {
    await axios.delete(`${baseUri}/users/${id}`);
    console.log('User deleted');
  } catch (error) {
    console.error('Error updating user:', error);
  }
}

async function normalFlow() {
  try {
    const newUser = await createNewUser()
    const updatedUser = await updateUser(newUser.id)
    const response = await axios.get(`${baseUri}/users`);
    console.log(response.data);
    await deleteUser(updatedUser.id)

    const response2 = await axios.get(`${baseUri}/users`);
    console.log(response2.data);
  } catch (error) {
    console.error('Error making request:', error);
  }
}

normalFlow();

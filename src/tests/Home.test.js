import axios from 'axios';


const fetchData = () => axios.get('https://jsonplaceholder.typicode.com/users');

test('the first element of results', async () => {
  return fetchData().then(res => {
    expect(res.data[0].username).toBe("Bret")
  });
});
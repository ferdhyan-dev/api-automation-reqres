const { expect } = require('chai');
const axios = require('axios');

describe('GET User', () => {
  it('should return user with id 2', async () => {
    const res = await axios.get('https://reqres.in/api/users/2');
    expect(res.status).to.equal(200);
    expect(res.data.data.id).to.equal(2);
  });
});

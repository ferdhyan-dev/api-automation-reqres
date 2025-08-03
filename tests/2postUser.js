const { expect } = require('chai');
const axios = require('axios');

describe('POST User', () => {
  it('should create new user', async () => {
    const payload = { name: 'morpheus', job: 'leader' };
    const res = await axios.post('https://reqres.in/api/users', payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    expect(res.status).to.equal(201);
    expect(res.data.name).to.equal('morpheus');
  });
});

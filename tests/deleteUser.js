const { expect } = require('chai');
const axios = require('axios');

describe('DELETE User', () => {
  it('should delete user successfully', async () => {
    const res = await axios.delete('https://reqres.in/api/users/2', {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    expect(res.status).to.equal(204);
  });
});

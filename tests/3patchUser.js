const { expect } = require('chai');
const axios = require('axios');

describe('PATCH User', () => {
  it('should update user job', async () => {
    const payload = { job: 'zion resident' };
    const res = await axios.patch('https://reqres.in/api/users/2', payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    expect(res.status).to.equal(200);
    expect(res.data.job).to.equal('zion resident');
  });
});

import request from "../utils/request";


describe('Users', () => {
   
    beforeEach()
    
    it('should return users', async () => {
        const users = await request(process.env.BASE_URL + 'users/')
        expect(users).toHaveLength(2);
    })
    
});
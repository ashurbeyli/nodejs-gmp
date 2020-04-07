import UserController from '../userController';

describe("userController", () => {

    let userController;
    beforeEach(() => {
        userController = new userController()
    });


    it("should return true", () => {
        UserService.mockImplementation(() => {
            return {
              getUsers: Promise.resolve([{ id: 1 }, { id: 2 }]),
            };
        });

        expect(1).toBe(1);
    })
});
import { BAD_REQUEST, OK, CREATED,  } from 'http-status-codes';

import UserController from '../userController';
import UserService from '../../services/userService';

jest.mock('../../services/userService',);

describe("Integration:: userController", () => {
    let userService;
    let userController;

    describe("createUser", () => {

        // beforeEach(() => {
        //     userService = new UserService({});
        //     userService[method].mockImplementation(() => Promise.resolve(resData));
        //     userController = new UserController(userService);
        // });

        // it(`should return ${statusCode} status with data`, async () => {
        //     const mockResponse = () => {
        //         const res = {};
        //         res.status = jest.fn().mockReturnValue(res);
        //         res.json = jest.fn().mockReturnValue(res);
        //         return res;
        //     };
        //     const res = mockResponse();
        //     await userController[method]({ params: {} }, res, null);
        //     expect(res.json).toBeCalledWith(resData);
        //     expect(res.status).toBeCalledWith(statusCode);
        // });
    });
});
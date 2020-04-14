import { BAD_REQUEST, OK, CREATED,  } from 'http-status-codes';

import UserController from '../userController';
import UserService from '../../services/userService';

jest.mock('../../services/userService',);

describe("userController", () => {
    let userService;
    let userController;
    let res;

    const user1 = Object.freeze({id: 1});
    const methods = [
        { method: 'getUsers', statusCode: OK, resData: [user1, { id: 2 }] },
        { method: 'getUserById', statusCode: OK, resData: [user1] },
        { method: 'createUser', statusCode: CREATED, resData: user1 },
        { method: 'updateUser', statusCode: OK, user1 },
        { method: 'deleteUser', statusCode: OK, resData: {} }];

    methods.forEach(({ method, statusCode, resData}) => {
        describe(method, () => {

            beforeEach(() => {
                const mockResponse = () => {
                    const res = {};
                    res.status = jest.fn().mockReturnValue(res);
                    res.send = jest.fn().mockReturnValue(res);
                    return res;
                };
                res = mockResponse();
            });

            it(`should return ${statusCode} status with data`, async () => {
                userService = new UserService({});
                userService[method].mockImplementation(() => Promise.resolve(resData));
                userController = new UserController(userService);
                await userController[method]({ params: {} }, res, null);

                expect(res.send).toBeCalledWith(resData);
                expect(res.status).toBeCalledWith(statusCode);
            });
    
            it(`should return ${BAD_REQUEST} with error`, async () => {
                const error = { msg: 'error'};
                userService = new UserService({});
                userService[method].mockImplementation(() => Promise.reject(error));
                userController = new UserController(userService);
                await userController[method]({ params: {} }, res, null);
                
                expect(res.send).toBeCalledWith(error);
                expect(res.status).toBeCalledWith(BAD_REQUEST);
            });
        });
    })
});
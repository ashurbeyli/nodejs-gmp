import { BAD_REQUEST, OK, CREATED,  } from 'http-status-codes';

import GroupController from '../groupController';
import GroupService from '../../services/groupService';

jest.mock('../../services/groupService',);

describe("groupController", () => {
    let groupService;
    let groupController;

    const group1 = Object.freeze({id: 1});
    const methods = [
        { method: 'getGroups', statusCode: OK, resData: [group1, { id: 2 }] },
        { method: 'getGroupById', statusCode: OK, resData: [group1] },
        { method: 'createGroup', statusCode: CREATED, resData: group1 },
        { method: 'updateGroup', statusCode: OK, group1 },
        { method: 'deleteGroup', statusCode: OK, resData: {} },
        { method: 'addUsersToGroup', statusCode: OK, resData: {} },
        { method: 'getGroupUsers', statusCode: OK, resData: [group1, { id: 2 }] },
    ];

    methods.forEach(({ method, statusCode, resData}) => {
        describe(method, () => {
            it(`should return ${statusCode} status with data`, async () => {
                groupService = new GroupService({}, {}, {});
                groupService[method].mockImplementation(() => Promise.resolve(resData));
                groupController = new GroupController(groupService);
    
                const mockResponse = () => {
                    const res = {};
                    res.status = jest.fn().mockReturnValue(res);
                    res.json = jest.fn().mockReturnValue(res);
                    return res;
                };
                const res = mockResponse();
                await groupController[method]({ params: {}, body: {} }, res, null);
                expect(res.json).toBeCalledWith(resData);
                expect(res.status).toBeCalledWith(statusCode);
            });
    
            it(`should return ${BAD_REQUEST} with error`, async () => {
                const error = { msg: 'error'};
                groupService = new GroupService({});
                groupService[method].mockImplementation(() => Promise.reject(error));
                groupController = new GroupController(groupService);
    
                const mockResponse = () => {
                    const res = {};
                    res.status = jest.fn().mockReturnValue(res);
                    res.send = jest.fn().mockReturnValue(res);
                    return res;
                };
                const res = mockResponse();
                await groupController[method]({ params: {}, body: {} }, res, null);
                expect(res.send).toBeCalledWith(error);
                expect(res.status).toBeCalledWith(BAD_REQUEST);
            });
        });
    })
});
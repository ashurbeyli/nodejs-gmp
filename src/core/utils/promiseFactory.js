const promiseFactory = (bodyFunc) => new Promise((resolve, reject) => bodyFunc.then(data => resolve(data)).catch(err => reject(err)));

export default promiseFactory;

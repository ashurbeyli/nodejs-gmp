import map from 'lodash/map';

import db from '../../src/config/db';

const truncateDb = async () => {
    return await Promise.all(
        map(Object.keys(db.models), (key) => {
            if (['sequelize', 'Sequelize'].includes(key)) return null;
            return db.models[key].destroy({ where: {}, force: true });
        })
    );
};

export default truncateDb;

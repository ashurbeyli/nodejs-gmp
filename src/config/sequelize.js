const sequelizeConfig = {
    development: {
        dialect: 'sqlite',
        storage: './services.development.sqlite'
    }
};

export default sequelizeConfig;

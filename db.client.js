const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgresql://esgi_db_exam_51435_user:UOS5jqYUen4DZy0BF0iPMxpy1SJtPrsv@dpg-cv3au1i3esus73deti50-a/esgi_db_exam_51435', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;
import app from "./app.js";
import { sequelize } from "./database/database.js";

import './models/User.js';
import './models/Store.js';
// import './models/Article.js';

try {
    await sequelize.sync({ force: false });
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`backend listening on port ${port}!`));

} catch (error) {
    console.error('Unable to connect to the database:', error);
    
}


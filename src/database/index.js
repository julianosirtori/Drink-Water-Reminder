import Realm from 'realm';

import DrinkSchema from './models/Drink';

const realm = new Realm({ schema: [DrinkSchema] });

export default realm;

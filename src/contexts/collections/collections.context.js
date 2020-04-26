import { createContext } from 'react';

import SHOP_DATA from './shop.data';

// Initial value for SHOP_DATA in the CollectionsContext
const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;

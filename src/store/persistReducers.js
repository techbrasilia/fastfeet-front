import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'fastfeetfabiorc_techbrasilia',
      storage,
      whitelist: ['auth', 'user', 'deliveryman'],
    },
    reducers
  );

  return persistedReducer;
};

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../rootReducer';
import rootSaga from '../../saga/rootSaga';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [
        'reducerHomeScreen',
        'reducerForSearchCategories',
    ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export const myPersistor = persistStore(store);
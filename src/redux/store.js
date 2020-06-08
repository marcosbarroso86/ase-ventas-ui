import {createStore, combineReducers,compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import administratorReducer from '../redux/ducks/administratorDucks';

//Cada vez que se agregue un duck, se debe agregar el atributo al objeto que tiene por argumento
//esta funcion
const rootReducer = combineReducers({
    administrator: administratorReducer,
})

//si no tiene instalado la extension de redux, le pasa la funcion compose que viene de la libreria de redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}
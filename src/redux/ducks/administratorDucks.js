import axios from 'axios';

//Estado inicial
const initialData = {
}

//TYPES
const GET_ADMINISTRATOR_SUCCESS = "GET_ADMINISTRATOR_SUCCESS";

//reducer
//A medida que se creen los distintos action, se tienen que ir colocando en los cases
export default function administratorReducer(state = initialData,action){
    switch(action.type){
        case GET_ADMINISTRATOR_SUCCESS:
            return {...state,... action.payload}
        default:
            return state;
    }
}

//actions
//Ejemplo de un action que realiza un GET request

//acciones
export const getAdministratorAction = () => {
    
    return async dispatch => {
        try{
            //TODO realizar una peticion GET a la API
            
            //invoca a la funcion dispatch, pasandole un objeto que tiene el atributo type con la constante
            //y en el payload la data del reponse
            
            dispatch({
                type: GET_ADMINISTRATOR_SUCCESS,
                payload: {}
            })
        }catch(error){
            console.log(error);
        }
    }
    
}
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import loginReducer from '../LoginModule/redux/reducers';

const rootReducer = combineReducers({
    login: loginReducer
  });

  const customMiddleware = store => (next, ...otherparams) => action => {
    // Aqui se puede generar código para modificar algun dato, parsear informacion o correr otra accion a parte.
    // action es la variable qué tiene el objecto enviado desde el action ( { type, data} )
   // next es la funcion qué hara qué el middleware prosiga con su flujo ( sino llamamos a este metodo el action nunca ira al reducer)
   // store es el store ( :P ) por ende desde aca tenemos acceso al getState o al dispatch.  
   console.log('intervine', action);
    next(action);
   }

  const middlewares = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    applyMiddleware(customMiddleware),
  ); 
  
export const store = createStore(rootReducer,
    middlewares,
    )
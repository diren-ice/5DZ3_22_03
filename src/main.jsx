import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'

  const initialState = {
        user: {
            name: '',
            age: 0,
            gender: ''
        }
}



const formReducer = (state=initialState, action) => {
  if (action.type === 'CHANGE_NAME') {
      return {...state, name: action.payload}
      }
       if (action.type === 'CHANGE_AGE') {
          return {...state, age: action.payload}
      }  if (action.type === 'CHANGE_GENDER') {
          return {...state, gender: action.payload}
      }
  else
      {
          return state
      }
}
const store = createStore(formReducer)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
)

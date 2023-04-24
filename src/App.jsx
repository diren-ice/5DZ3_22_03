import { useSelector, useDispatch } from 'react-redux'
import './App.css'

function App() {
          const formAge = useSelector(state => state.age)
          const formName = useSelector(state => state.name)
          const formGender = useSelector(state => state.gender)
        const dispatch = useDispatch()


      const changeForm = (e) => {
    dispatch({type: 'CHANGE_NAME', payload: e.target.value})
  }
     const changeAge = (e) => {
    dispatch({type: 'CHANGE_AGE', payload: e.target.value})
  }
    const changeGender = (e) => {
    dispatch({type: 'CHANGE_GENDER', payload: e.target.value})
  }


    return (
    <div className={'FORMS'}>
        <input type="name" placeholder={"Write name"} onChange={changeForm}/>
                <h3>Name: {formName}</h3>
        <input type="age" placeholder={"Write age"} onChange={changeAge}/>
               <h3>Age: {formAge}</h3>
        <select  onChange={changeGender}>
            <option>MAN</option>
            <option>WOMEN</option>
        </select>
            <h3>Gender: {formGender}</h3>
    </div>

  )
}

export default App

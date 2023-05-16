import React, {useState} from 'react'
import Axios from 'axios'
import {useDispatch} from 'react-redux'
import {loginUser} from '../../../_actions/user_action';
import { useNavigate } from "react-router-dom";
import Auth from '../../../hoc/auth'

function LoginPage(props) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //State 생성
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault(); //페이지가 리프레시 되지 않게 하기 위한 부분

    //서버에 저장될 데이터들
    let body = {
      email: Email,
      password: Password
    }

    dispatch(loginUser(body))
    .then(response => { //페이지 이동시키는 작업
      if(response.payload.loginSuccess) {
        navigate('/');
      } else{
        alert("ERROR")
      }
    })

  }

  return (
    <div style = {{
      display: 'flex', justifyContent: 'center', alignItems: 'center'
      , width: '100%', height: '100vh'
    }}>
      <form style = {{display: "flex", flexDirection: "column"}}
      onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type = "email" value={Email} onChange={onEmailHandler} />
        <label> Password </label>
        <input type = "password" value={Password} onChange={onPasswordHandler} />

        <br />
        <button type="submit">
          Login
        </button>


      </form>
    
    
    </div>
  )
}

export default Auth(LoginPage, false);
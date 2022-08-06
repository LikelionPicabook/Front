import React from "react";
import "./styles/login.css"
import { Link } from "react-router-dom"

const Login = () => {
  return(
    <>
      <div className="title">PICABOOK</div>
      <section>
        <form className="login_form">
          <input className="login_input" id="id" type="text" placeholder="이메일 주소 또는 아이디"/>
          <input className="login_input" id="password" type="text" placeholder="패스워드"/>
          <label className="login_check"><input type="checkbox" name="login_statue" value="O"/>
          로그인 상태 유지하기</label>
          <button className="login_btn" id="login_btn">로그인</button>
        </form>
        <div className="login_option">
          <button>아이디 찾기</button>
          <button>비밀번호 재설정</button>
          <Link to = "/signin">
            <button>회원가입</button>
          </Link>
        </div>
        <div className="signin_sns">
          <p>SNS로 간편 회원가입</p>
          <div className="signin_option">
            {/* <button style={{background:url(img/kakaotalk.png)}}></button>
            <button style={{background:url(img/naver.png)}}></button>
            <button style={{background:url(img/facebook.png)}}></button> */}
          </div>
        </div>
      </section>
      <div className="nosign">비회원으로 시작</div>
    </>
  ); 
}

export default Login;


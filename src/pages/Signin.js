import styled from "styled-components";
import React from "react";

const Signin = () => {
  return(
    <>
      <Header>
        회원가입
      </Header>
      <Form>
        <Label>
          아이디
          <Input type="text" name="id" placeholder="ID 입력"></Input>
          <Btn>중복 확인</Btn>
        </Label>
        <Label>
          패스워드
          <Input type="text" name="pw" placeholder="비밀번호"></Input>
          <Input type="text" name="pw check" placeholder="비밀번호 재확인"></Input>
        </Label>
        <Label>
          이름
          <Input type="text" name="name" placeholder="실명을 입력해 주세요"></Input>
        </Label>
        <Label>
          생년월일
          <Input type="text" name="birth" placeholder="8자리 입력"></Input>
        </Label>
      </Form>
    </>
  ); 
}

export default Signin;

const Header = styled.header`
  position: absolute;
  top: 0;
  height: 110px;
  width: 100%;
  box-sizing: border-box;
  background: #FFFFFF;
  border-bottom : 1px solid #d4d4d4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
  z-index: 100;
`

const Form = styled.form`
  width: min-content;
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: absolute;
  top: 200px;
  left: 0;
  right: 0;
  margin: auto;
`

const Label = styled.label`
`

const Input = styled.input`
`

const Btn = styled.button`
  box-sizing: border-box;
  width: 72px;
  height: 23px;

  border: 1px solid #9848FF;
  border-radius: 20px;
`
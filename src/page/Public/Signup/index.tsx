import Button from "@/components/Button";
import Input from "@/components/Input";
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { postSignup } from "Shared/api/users/index.api";
import { isValidPassword, regex } from "Shared/sugar";
import styled from "styled-components";
const initialErrorMessage = {
  name: "",
  userId: "",
  password: "",
  passwordCheck: "",
};
function Signup() {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [error, setError] = useState({ ...initialErrorMessage });
  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isAllOk = true;
    const errorMessage: Partial<typeof error> = {};
    if (name === "") {
      isAllOk = false;
      errorMessage.name = "이름은 필수사항입니다.";
    }
    if (!regex.userId.test(userId)) {
      isAllOk = false;
      errorMessage.userId = "8자 이상, 18자 이하의 영어 소문자와 숫자만 입력 가능합니다.";
    }
    if (!isValidPassword(password) || password.length < 8 || password.length > 16) {
      isAllOk = false;
      errorMessage.password = "영어 대,소문자, 숫자, 특수문자 2종류 이상의 8자 이상, 16자 이하만 입력 가능합니다.";
    }
    if (password !== passwordCheck) {
      isAllOk = false;
      errorMessage.passwordCheck = "비밀번호와 일치하지 않습니다.";
    }
    try {
      if (!isAllOk) {
        setError({ ...initialErrorMessage, ...errorMessage });
        return;
      }

      const response = await postSignup({ name, userId, password });
      if (response?.status !== 201) {
        alert(response?.data.message || "비정상적인 오류입니다. 지속된다면 개발자에게 문의주세요.");
        return;
      }
      alert("회원가입 완료되었습니다. 로그인페이지로 이동합니다.");
      navigate("/");
    } catch (error) {
      alert((error as any).message || "비정상적인 오류입니다. 지속된다면 개발자에게 문의주세요.");
    }
  };
  return (
    <Container>
      <Title>회원가입</Title>
      <FormContainer onSubmit={handleSubmit}>
        <Input name="name" label="이름" value={name} onChange={(e) => setName(e.target.value)} error={error.name} />
        <Input
          name="userId"
          label="아이디"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          error={error.userId}
        />
        <Input
          name="password"
          label="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={error.password}
        />
        <Input
          name="password-check"
          label="비밀번호 확인"
          type="password"
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
          error={error.passwordCheck}
        />
        <SubmitButton type="submit">회원가입 하기</SubmitButton>
      </FormContainer>
    </Container>
  );
}

export default Signup;

const Container = styled.div`
  max-width: 400px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% - 60px));
  padding: 24px;
`;
const Title = styled.h1`
  text-align: center;
  margin-bottom: 36px;
`;
const FormContainer = styled.form``;

const SubmitButton = styled(Button)`
  margin-top: 12px;
`;

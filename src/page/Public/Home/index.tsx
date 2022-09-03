import Button from "@/components/Button";
import Input from "@/components/Input";
import React, { FormEvent, useState } from "react";
import { postLogin } from "Shared/api/users/index.api";
import useUserStore from "Shared/stores/user";
import styled from "styled-components";

function Home() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUserStore();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userLogin = await postLogin({
      userId,
      password,
    });
    if (userLogin?.success) {
      localStorage.setItem(
        "memory-user",
        JSON.stringify({
          access: userLogin.access,
          accessExpire: userLogin.access_expire,
          refreshExpire: userLogin.refresh_expire,
        }),
      );
      setUser({ name: userLogin.name, access: userLogin.access });
    } else {
      alert(userLogin?.message || "비정상적인 에러입니다. 지속되면 개발자에게 연락주세요.");
    }
  };
  return (
    <SigninContainer>
      <Title>Memory</Title>
      <form onSubmit={handleSubmit}>
        <Input
          name="userId"
          label="유저 아이디"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          onClear={() => setUserId("")}
          autoFocus
        />
        <Input
          name="password"
          label="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onClear={() => setPassword("")}
        />
        <BtnContainer>
          <Button onClick={() => console.log("test2")} type="button" varient="secondary">
            회원가입
          </Button>
          <Button type="submit">로그인</Button>
        </BtnContainer>
      </form>
    </SigninContainer>
  );
}

export default Home;

const BtnContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 24px;
`;

const SigninContainer = styled.div`
  width: 400px;
  height: 500px;
  padding: 24px 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;

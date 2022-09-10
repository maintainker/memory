import Button from "@/components/Button";
import Input from "@/components/Input";
import { useMutation } from "@tanstack/react-query";
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "Shared/api/users/index.api";
import useUserStore from "Shared/stores/user";
// import useUserStore from "Shared/stores/user";
import styled from "styled-components";

function Home() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUserStore();
  const { mutate } = useMutation(
    async ({ userId, password }: { userId: string; password: string }) => postLogin({ userId, password }),
    {
      onSuccess: async (data) => {
        if (data?.success) {
          localStorage.setItem(
            "memory-user",
            JSON.stringify({
              access: data["access"],
              accessExpire: data["access_expire"],
              refreshExpire: data["refresh_expire"],
            }),
          );
          setUser({ access: data["access"] });
        }
      },
      onError: (error) => {
        alert((error as any)?.message || "비정상적인 에러입니다. 지속되면 개발자에게 연락주세요.");
      },
    },
  );
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ userId, password });
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
          <Button onClick={() => navigate("/sign-up")} type="button" varient="secondary">
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

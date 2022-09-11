import Button from "@/components/Button";
import TextButton from "@/components/Button/Text";
import AlbumCard from "@/components/Card/Album";
import Input from "@/components/Input";
import SmallModal from "@/components/Modal/Small";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAlbums } from "Shared/api/albums/index.api";
import styled from "styled-components";

function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { data, isFetched } = useQuery(["USER_ALBUM"], getAlbums);
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <Container>
      <Header>
        <h2>앨범 리스트</h2>
        <TextButton onClick={() => setIsOpenModal(true)}>
          <TextContainer>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path>
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
            </svg>
            <span>앨범 추가</span>
          </TextContainer>
        </TextButton>
      </Header>
      {data && data.list.length === 0 && (
        <EmptyList>
          <span>앨범이 존재하지 않습니다. 앨범을 생성해보세요.</span>
        </EmptyList>
      )}
      {data && data.list.length > 0 && (
        <CardList>
          {data.list.map((el) => (
            <AlbumCard key={`album_${el.id}`} item={el} />
          ))}
        </CardList>
      )}
      {isOpenModal && (
        <SmallModal onClose={closeModal}>
          <NewAlbumForm>
            <Input name="album_name" label="앨범 이름" />
            <Button>생성하기</Button>
          </NewAlbumForm>
        </SmallModal>
      )}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  max-width: 1200px;
  width: calc(100% - 50px);
  margin: 0 auto;
  padding: 50px 0;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextContainer = styled.div`
  padding: 12px 8px;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
  }
`;
const EmptyList = styled.div`
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #989898;
`;
const NewAlbumForm = styled.div`
  padding: 20px;
  min-width: 300px;
`;

const CardList = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: nowrap;
  padding: 24px 0;
`;

import React from "react";
import styled from "styled-components";
interface Props {
  item: {
    id: number;
    nickname: string;
    album: {
      id: number;
      name: string;
    };
  };
  onClick: (id: number) => void;
}
function AlbumCard(props: Props) {
  const { onClick } = props;
  return (
    <Container onClick={() => onClick(props.item.album.id)}>
      <h3>{props.item.album.name}</h3>
      <Nickname>{props.item.nickname}님</Nickname>
    </Container>
  );
}

export default AlbumCard;

const Container = styled.a`
  display: block;
  /* flex: 1; */
  padding: 20px;
  width: 200px;
  height: 150px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  cursor: pointer;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const Nickname = styled.p`
  margin-top: 8px;
`;

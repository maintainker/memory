import TextButton from "@/components/Button/Text";
import Loading from "@/components/Loading";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { getAlbumDetail } from "Shared/api/albums/index.api";
import styled from "styled-components";

function AlbumDetail() {
  const { albumId } = useParams();
  const { refetch, data, isFetched } = useQuery(
    ["GetAlbumDetail"],
    () => getAlbumDetail({ albumId: Number(albumId || 0) }),
    {
      enabled: false,
    },
  );
  console.log(data, isFetched);

  useEffect(() => {
    refetch();
  }, [refetch, albumId]);
  if (!isFetched) return <Loading />;
  return (
    <Container>
      <Header>
        <h2>
          우리의 앨범 : {data?.album.name} ({data?.albumUser.nickname}님)
        </h2>
        <TextButton>
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
            <span>추억 추가하기</span>
          </TextContainer>
        </TextButton>
      </Header>

      {(!data?.album?.event || data.album.event.length === 0) && (
        <EmptyList>
          <span>추억이 존재하지 않습니다. 우리의 추억을 만들어보세요.</span>
        </EmptyList>
      )}
    </Container>
  );
}

export default AlbumDetail;

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

declare namespace DTOS {
  namespace Response {
    interface GetAlbums {
      list: {
        id: number;
        nickname: string;
        album: {
          id: number;
          name: string;
        };
      }[];
    }
  }
  namespace Request {
    interface CreateAlbum {
      albumName: string;
      nickname?: string;
      password?: string;
    }
  }
}

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
    interface GetAlbumDetail {
      album: {
        id: number;
        name: string;
        event: unknown[];
      };
      albumUser: {
        id: number;
        nickname: string;
        role: string;
      };
    }
  }
  namespace Request {
    interface CreateAlbum {
      albumName: string;
      nickname?: string;
      password?: string;
    }

    interface GetAlbumDetail {
      albumId: number;
    }
  }
}

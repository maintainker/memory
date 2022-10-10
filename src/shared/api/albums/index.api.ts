import apiInstant from "..";

export const getAlbums = async () => {
  try {
    const { data } = await apiInstant.get<DTOS.Response.GetAlbums>("/albums");
    return data;
  } catch (error) {
    return null;
  }
};

export const createAlbum = async (body: DTOS.Request.CreateAlbum) => {
  try {
    await apiInstant.post("/albums", body);
  } catch (error) {
    throw error;
  }
};

export const getAlbumDetail = async (params: DTOS.Request.GetAlbumDetail) => {
  try {
    const { data } = await apiInstant.get<DTOS.Response.GetAlbumDetail>("/albums/detail", { params });
    return data;
  } catch (error) {
    throw error;
  }
};

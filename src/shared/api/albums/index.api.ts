import apiInstant from "..";

export const getAlbums = async () => {
  try {
    const { data } = await apiInstant.get<DTOS.Response.GetAlbums>("/albums");
    return data;
  } catch (error) {
    return null;
  }
};

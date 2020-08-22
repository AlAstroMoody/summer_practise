import instance from "../getInstanceWithBaseUrl";

export const getIngredients = async () => {
  let response = await instance.get(`ingredients`);
  return response.data["results"];
};

export const addNewIngredient = async params => {
  let response = await instance.post("ingredients/", params);
  return response.data;
};

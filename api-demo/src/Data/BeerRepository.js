import axios from "axios";
const BASE_URL = "https//api.punkapi.com/v2/beers";

//async function to export
//show one page with 10 items (Beers)
export const fetchBeers = async((page = 1), (perPage = 10));
//go to method after axios is try,catch,await
try {
  //simulate delay/loading screen
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axios.get(BASE_URL, {
    params: {
      page: page,
      per_page: perPage,
    },
  });
  //return array of beers
  return response.data;
} catch (error) {
  throw error;
}

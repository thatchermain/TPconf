import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: process.env.REACT_APP_SPACE_ID,
    // space: "x7jftx1z6qhi",
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    // accessToken: "bdz4g4_u6J57t_9T94eqC67qltt7AkKxpKotEouemyQ",
  });

  const getOffers = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "jobOffer",
        select: "fields",
      });
      const finalEntries = entries.items.map((item) => item.fields);
      console.log(finalEntries);
      return finalEntries;
    } catch (error) {
      console.log(error);
    }
  };
  return { getOffers };
};

export default useContentful;

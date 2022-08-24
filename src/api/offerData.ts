const get = async (): Promise<OfferData> => {
  try {
    return await fetch("./db.json").then((res) => res.json());
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default {
  get,
};

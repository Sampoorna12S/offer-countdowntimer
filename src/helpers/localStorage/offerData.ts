import { KEYS } from "../../constants";

const set = (offerData: OfferData) => {
  localStorage.setItem(
    KEYS.LOCAL_STORAGE_KEYS.OFFER_DATA,
    JSON.stringify(offerData)
  );
};

const get = (): OfferData => {
  try {
    return JSON.parse(
      localStorage.getItem(KEYS.LOCAL_STORAGE_KEYS.OFFER_DATA) ?? ""
    );
  } catch (error) {
    console.error(error);
    return null;
  }
};

const remove = () => {
  localStorage.removeItem(KEYS.LOCAL_STORAGE_KEYS.OFFER_DATA);
}

export default {
  set,
  get,
  remove,
};

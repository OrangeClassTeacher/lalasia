import http from "../utils/http-common";

const getProducts = (params) => {

  console.log(params);

  
  return http.get("/product", {
    headers: {
      "Content-type": "application/json",
    },
  });
};

const getProduct = (params, token) => {
  return http.get(`/product/${params}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

export { getProducts, getProduct };

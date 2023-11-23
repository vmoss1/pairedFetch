/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

const getProduct = async () => {
  const url = await fetch("/products");
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
  };
  return fetch(url, options);
};

/* ============================== Phase 2 ============================== */

const getProduct2 = async () => {
  const response = await fetch("/products");
  console.log("status", response.status); // status 200 // header text/html; charset=utf-8
  console.log("header", response.headers.get("Content-Type"));
  console.log("url", response.url); // url http://localhost:5000/products
};

getProduct2();

/* ============================== Phase 3 ============================== */

const getProduct3 = async () => {
  const url = await fetch("/products");
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      name: "Caribbean Delight Coffee",
      description: "Made by Manatee Coffee",
      price: 11.99,
      categories: "grocery",
    }),
  };
  return fetch(url, options);
};

"use client";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export async function createProduct(data) {
  const url = "/api/products";

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  });

  return response.json();
}

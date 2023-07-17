import apiFetch from "./api-fetch";

export async function getBrands(search){
  if (search) return await apiFetch(`cars?search=${search}`)
  const brands = await apiFetch("cars")
  console.log("BRANDS",brands)
  return brands
}
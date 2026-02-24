export async function getProductsByCategory(BASE_URL, category) {
  const res = await fetch(`${BASE_URL}/category/${category}`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data;
}
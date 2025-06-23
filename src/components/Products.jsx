import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchProducts() {
  const res = await axios.get("http://localhost:3000/products");

  console.log(res);
  return res.data;
}

export default function Products() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({ queryKey: ["products"], queryFn: fetchProducts });

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isLoading && error) {
    content = <div>An error occured: {error.message}</div>;
  } else if (!isLoading && products?.length === 0) {
    content = <div>No products found</div>;
  } else if (!isLoading && products?.length > 0) {
    content = products.map((product) => {
      return (
        <div key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      );
    });
  }

  return <div>{content}</div>;
}

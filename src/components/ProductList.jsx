import { useEffect, useRef, useState } from "react";

const PRODUCTS_PER_PAGE = 20;

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef();

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${PRODUCTS_PER_PAGE}&skip=${
          PRODUCTS_PER_PAGE * (page - 1)
        }&select=title,price,thumbnail`
      );
      const data = await res.json();

      return data;
    }

    async function fetchProductsOnScroll(entries) {
      if (entries[0]?.isIntersecting && hasMore) {
        const data = await fetchProducts();

        setProducts((prev) => [...prev, ...data.products]);

        if (data?.total === data?.skip + data?.limit) {
          setHasMore(false);
        } else {
          setPage((prev) => prev + 1);
        }
      }
    }

    const observer = new IntersectionObserver(fetchProductsOnScroll);

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [page, hasMore]);

  return (
    <section>
      <div>
        {products.map((product) => (
          <p key={product.id}>{product.title}</p>
        ))}
      </div>

      {hasMore && <p ref={observerRef}>Loading Products...</p>}
    </section>
  );
}

import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold">Product List</h1>

      {/* Dummy Content */}
      <section className="h-[calc(100vh*1/2)] my-10 bg-black/30"></section>

      <ProductList />
    </div>
  );
}

export default App;

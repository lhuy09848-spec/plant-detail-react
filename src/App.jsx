import Header from "./components/Header";
import Banner from "./components/Banner";
// import ProductList from "./components/ProductList";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />
      <Banner />
      {/* <ProductList products={products} />  ← truyền data vào */}
      <Footer />
    </>
  );
}

export default App;
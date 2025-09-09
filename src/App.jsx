import { BrowserRouter, Routes, Route } from "react-router-dom";
function Home(){return <h1>Inicio</h1>}
function Products(){return <h1>Productos</h1>}
function Login(){return <h1>Login</h1>}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
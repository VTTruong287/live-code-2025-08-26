import { Route, Router, Routes } from "react-router-dom"
import Layout from "./layouts/default"
import Inventory from "./pages/Inventory"
import Cart from "./pages/Cart"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="inventory" element={<Inventory />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}

export default App

import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import BuyPage from "./Components/BuyPage";

import Cart from "./Components/Cart";
import { Container, Row, Col } from "reactstrap";

function App() {
  const [cartItem, setCartitem] = useState([]);
  const AddInCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
    });

    if (isAlreadyAdded !== -1) {
      toast("already added in cart", { type: "error" });
      return;
    }

    setCartitem([...cartItem, item]);
    console.log(cartItem);
  };

  const buyNow = () => {
    setCartitem([]);
    toast("Purchase Complete", {
      type: "success",
    });
  };

  const removeItem = (item) => {
    setCartitem(cartItem.filter((signleItem) => signleItem.id !== item.id));
  };
  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
          <BuyPage addInCart={AddInCart} />
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
      <button onClick={() => test()}>test</button>
    </Container>
    // <div className="App">
    //   <BuyPage addInCart={AddInCart} />
    // </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import Axios from "axios";
import { faker } from "@faker-js/faker";
import data from "./pexels.json";
import { Container, Row, Col } from "reactstrap";
import CartItem from "./Carditem";

const url = "https://myjson.dit.upm.es/api/bins/33j2";
const localUrl = "./pexels.json";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  const fetchPhotos = async () => {
    /**
     *
     * Here we are using the local data so we are not using axios as per
     * curreculam I am just importing data and using it
     * line 4 is import Statment
     */

    // const { data } = await Axios.get(url);
    // const { photos } = data;

    // When Url is not working
    const { photos } = data;

    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: faker.random.word(),
      productPrice: faker.commerce.price(),
      id: faker.random.numeric(10),
    }));

    setProduct(allProduct);
  };
  useEffect(() => {
    fetchPhotos();
  }, []);
  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map((product) => {
          return (
            <Col md={4} key={product.id}>
              <CartItem product={product} AddInCart={addInCart} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BuyPage;

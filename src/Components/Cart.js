import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Row,
  Col,
} from "reactstrap";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;
  cartItem.forEach((item) => {
    amount = parseFloat(amount + parseFloat(item.productPrice));
  });

  return (
    <Container fluid>
      <h1 className="text-success">Your Cart</h1>
      <ListGroup>
        {cartItem.map((item) => {
          return (
            <ListGroupItem key={item.id}>
              <Row>
                <Col>
                  <img height={80} src={item.tinyImage} />
                </Col>
                <Col className="tex-center">
                  <div className="text-primary">{item.productName}</div>
                  <span>price:{item.productPrice}</span>
                  <Button
                    color="danger"
                    onClick={() => {
                      removeItem(item);
                    }}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </ListGroupItem>

            //if Everything is empyt
          );
        })}
      </ListGroup>
      {
        //if Cart is empty
        cartItem.length >= 1 ? (
          <Card className="text-center mt-3">
            <CardHeader>Grand total</CardHeader>
            <CardBody>
              Your Amount for {cartItem.length} product is {amount}
            </CardBody>
            <CardFooter>
              <Button color="success" onClick={buyNow}>
                Pay Here
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <h1> Cart is empty</h1>
        )
      }
    </Container>
  );
};

export default Cart;

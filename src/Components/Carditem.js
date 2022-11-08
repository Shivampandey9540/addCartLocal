import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

const CartItem = ({ product, AddInCart }) => {
  return (
    <Card className="mt-2 mb-1">
      <CardImg top height="250" width="100%" src={product.smallImage} />
      <CardBody>
        <CardTitle>{product.productName}</CardTitle>
        <CardText className="Secondary">
          {" "}
          price Rs: {product.productPrice}
        </CardText>
        <Button color="success" onClick={() => AddInCart(product)}>
          Buy Now
        </Button>
      </CardBody>
    </Card>
  );
};

export default CartItem;

import { Meta, StoryObj } from "@storybook/react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ActionMenu, ActionMenuProps } from ".";
import { ProductItem } from "../ProductItem";

export default {
  component: ActionMenu,
} as Meta;

export const Products = [
  {
    title: "50ml",
    price: "$80.00",
  },
  {
    title: "50ml",
    price: "$80.00",
    description: "some description goes here !!!",
  },
  {
    title: "50ml",
    price: "$80.00",
    description: "some description goes here !!!",
    tag: "3 x 5ml for $40.00",
  },
]

const Examplechildren = () => (
  <>
    {Products.map((product, index) => (
      <ProductItem key={index} {...product} />
    ))}
  </>
);

export const Standard: StoryObj<ActionMenuProps> = {
  args: {
    children: <Examplechildren />,
  },
};

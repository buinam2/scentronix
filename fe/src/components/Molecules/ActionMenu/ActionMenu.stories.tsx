import { Meta, StoryObj } from "@storybook/react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ActionMenu, ActionMenuProps } from ".";
import { ProductItem } from "../ProductItem";

export default {
  component: ActionMenu,
} as Meta;

const Examplechildren = () => (
  <>
    <ProductItem
      title={
        <span className="font-semibold">
          <AddShoppingCartIcon className="mr-2" /> 50ml
        </span>
      }
      price="$80.00"
    />
    <ProductItem
      title={
        <span className="font-semibold">
          <AddShoppingCartIcon className="mr-2" /> 50ml
        </span>
      }
      price="$80.00"
      description="some description goes here !!!"
    />
    <ProductItem
      title={
        <span className="font-semibold">
          <AddShoppingCartIcon className="mr-2" /> 50ml
        </span>
      }
      price="$80.00"
      description="some description goes here !!!"
      tag="3 x 5ml for $40.00"
    />
  </>
);

export const Standard: StoryObj<ActionMenuProps> = {
  args: {
    children: <Examplechildren />,
  },
};

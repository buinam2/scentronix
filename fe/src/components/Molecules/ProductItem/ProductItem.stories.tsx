import { Meta, StoryObj } from "@storybook/react";
import { ProductItem, ProductItemProps } from ".";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default {
  component: ProductItem,
} as Meta;

export const Standard: StoryObj<ProductItemProps> = {
  args: {
    title: (
      <span className="font-semibold">
        <AddShoppingCartIcon className="mr-2" /> 50ml
      </span>
    ),
    price: "$80.00",
    description: "some description goes here !!!",
    tag: "3 x 5ml for $40.00",
  },
};

export const WithoutTag: StoryObj<ProductItemProps> = {
  args: {
    ...Standard.args,
    tag: undefined,
  },
};

export const WithouDescription: StoryObj<ProductItemProps> = {
  args: {
    ...Standard.args,
    description:undefined
  },
};

export const WithouTagAndDescription: StoryObj<ProductItemProps> = {
  args: {
    ...Standard.args,
    tag: undefined,
    description:undefined
  },
};
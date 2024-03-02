import { Meta, Args } from "@storybook/react";
import { IconRow } from ".";

export default {
  title: "Components/IconRow",
  component: IconRow,
} satisfies Meta;

export const Default = (args: Args) => (
  <IconRow
    {...{
      icons: [
        {
          src: "https://picsum.photos/100/100",
          alt: "ALT 1",
        },
        {
          src: "https://picsum.photos/100/100",
          alt: "ALT 2",
        },
        {
          src: "https://picsum.photos/100/100",
          alt: "ALT 3",
        },
      ],
      ...args,
    }}
  />
);

import { Meta, Args } from "@storybook/react";
import { ImageStack } from ".";

export default {
  title: "Components/ImageStack",
  component: ImageStack,
} satisfies Meta;

export const Default = (args: Args) => (
  <ImageStack
    {...{
      images: [
        {
          src: "https://picsum.photos/200/300",
          alt: "ALT 200/300",
        },
        {
          src: "https://picsum.photos/300/400",
          alt: "ALT 300/400",
        },
        {
          src: "https://picsum.photos/400/500",
          alt: "ALT 400/500",
        },
      ],
      ...args,
    }}
  />
);

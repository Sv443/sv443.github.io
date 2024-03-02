import { Meta, Args } from "@storybook/react";
import { ListItem } from ".";

export default {
  title: "Components/ListItem",
  component: ListItem,
} satisfies Meta;

export const Default = (args: Args) => (
  <ListItem
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
      title: "My project",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/Sv443",
          imgSrc: "https://github.com/Sv443.png",
        },
      ],
      ...args,
    }}
  />
);

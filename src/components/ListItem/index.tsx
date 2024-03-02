import { ImageStack, type ImageStackProps } from "../ImageStack";

interface ListItemProps {
  images: ImageStackProps["images"];
  title: string;
  links: {
    imgSrc: string;
    href: string;
    label: string;
  }[];
}

export function ListItem({ images, title, links }: ListItemProps) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {links.map(({ imgSrc, href, label }) => (
          <li key={href}>
            <a href={href}>
              <img src={imgSrc} alt={label} />
              {label}
            </a>
          </li>
        ))}
      </ul>
      <ImageStack {...{ images }} />
    </div>
  );
}

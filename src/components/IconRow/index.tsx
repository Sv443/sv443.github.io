export interface IconRowProps {
  icons: {
    src: string;
    alt: string;
  }[];
}

export function IconRow({ icons }: IconRowProps) {
  return (
    <div>
      {icons.map(({ src, alt }) => (
        <img key={src} src={src} alt={alt} />
      ))}
    </div>
  );
}

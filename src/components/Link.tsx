import { useState, type HTMLProps, type ReactNode, useEffect } from "react";

type LinkProps = {
  href: string;
  title?: string;
  children: ReactNode;
} & HTMLProps<HTMLAnchorElement>;

export function Link({ href, title, children, ...rest }: LinkProps) {
  const [hrefReal, setHrefReal] = useState<string | undefined>(href);

  useEffect(() => {
    try {
      new URL(href);
    } catch {
      setHrefReal(undefined);
    }
  }, [href]);

  return hrefReal ? (
    <a
      {...{
        href: hrefReal,
        rel: "noopener noreferrer",
        title,
        ariaLabel: title,
        role: "link",
        ...rest,
      }}
    >
      {children}
    </a>
  ) : (
    <span>{href}</span>
  );
}

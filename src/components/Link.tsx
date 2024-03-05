import { useState, type HTMLProps, type ReactNode, useEffect } from "react";

type LinkProps = {
  href: string;
  title?: string;
  errorContent?: ReactNode;
  children: ReactNode;
} & HTMLProps<HTMLAnchorElement>;

export function Link({
  href: hrefParam,
  title,
  children,
  errorContent,
  ...rest
}: LinkProps) {
  const [href, setHref] = useState<string | undefined>(hrefParam);

  useEffect(() => {
    try {
      new URL(hrefParam);
    } catch {
      setHref(undefined);
    }
  }, [hrefParam]);

  return href ? (
    <a
      {...{
        href: href,
        rel: "noopener noreferrer",
        title,
        ariaLabel: title,
        role: "link",
        tabIndex: 0,
        ...rest,
      }}
    >
      {children}
    </a>
  ) : (
    errorContent ?? <span>{href}</span>
  );
}

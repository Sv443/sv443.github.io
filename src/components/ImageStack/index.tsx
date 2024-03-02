import { useCallback, useMemo, useState } from "react";

export interface ImageStackProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export function ImageStack({ images }: ImageStackProps) {
  const [imgIndex, setImgIndex] = useState(0);

  const imgLeft = useCallback(() => {
    setImgIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);
  const imgRight = useCallback(() => {
    setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const imgElem = useMemo(
    () => <img src={images[imgIndex].src} alt={images[imgIndex].alt} />,
    [images, imgIndex],
  );

  const indicatorElem = useMemo(
    () => (
      <div>
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setImgIndex(index)}
            style={{ cursor: "pointer" }}
          >
            {index === imgIndex ? "●" : "○"}
          </span>
        ))}
      </div>
    ),
    [images, imgIndex],
  );

  return (
    <div>
      <button onClick={imgLeft}>{"<"}</button>
      {imgElem}
      {indicatorElem}
      <button onClick={imgRight}>{">"}</button>
    </div>
  );
}

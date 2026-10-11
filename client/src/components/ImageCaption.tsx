import type { ReactNode } from "react";

type ImageCaptionProps = {
  credit?: ReactNode;
};

export default function ImageCaption({ credit }: ImageCaptionProps) {
  if (!credit) return null;

  return (
    <p className="photo-credit">
      {credit}
    </p>
  );
}

type ImageCaptionProps = {
  credit?: string;
};

export default function ImageCaption({ credit }: ImageCaptionProps) {
  if (!credit) return null;

  return (
    <p className="photo-credit">
      {credit}
    </p>
  );
}

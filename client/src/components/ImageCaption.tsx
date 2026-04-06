import { useTheme } from "@/contexts/ThemeContext";

type ImageCaptionProps = {
  credit?: string;
};

export default function ImageCaption({ credit }: ImageCaptionProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (!credit) return null;

  return (
    <p
      className="mt-[6px] text-sm"
      style={{
        fontFamily: "'Source Sans 3', sans-serif",
        color: isDark ? "#6b6760" : "#777",
      }}
    >
      {credit}
    </p>
  );
}

import { Fragment } from "react";

type FormattedTextProps = {
  text: string;
  className?: string;
};

const FormattedText = ({ text, className }: FormattedTextProps) => {
  const parts = text.split(
    /(<(?:strong|b|em|i|u)>[\s\S]*?<\/(?:strong|b|em|i|u)>)/g,
  );

  return (
    <p className={className}>
      {parts.map((part, index) => {
        const match = part.match(/^<(strong|b|em|i|u)>([\s\S]*?)<\/\1>$/);

        if (!match) {
          return <Fragment key={index}>{part}</Fragment>;
        }

        const [, tag, content] = match;

        switch (tag) {
          case "strong":
          case "b":
            return (
              <strong key={index} className="font-bold">
                {content}
              </strong>
            );

          case "em":
          case "i":
            return (
              <em key={index} className="italic">
                {content}
              </em>
            );

          case "u":
            return (
              <u key={index} className="underline underline-offset-4">
                {content}
              </u>
            );

          default:
            return <Fragment key={index}>{part}</Fragment>;
        }
      })}
    </p>
  );
};

export default FormattedText;

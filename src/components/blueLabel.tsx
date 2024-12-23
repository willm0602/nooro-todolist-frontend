type BlueLabelProps = {
  text: string;
  htmlFor?: string;
};

export default function BlueLabel(props: BlueLabelProps) {
  const { text, htmlFor } = props;

  return (
    <label htmlFor={htmlFor} className="text-lightBlue mt-14 font-bold">
      {text}
    </label>
  );
}

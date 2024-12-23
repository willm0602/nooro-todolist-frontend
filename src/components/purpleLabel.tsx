type PurpleLabelProps = {
  text: string;
  htmlFor?: string;
};

export default function PurpleLabel(props: PurpleLabelProps) {
  const { text, htmlFor } = props;

  return (
    <label htmlFor={htmlFor} className="text-purple mt-14 font-bold">
      {text}
    </label>
  );
}

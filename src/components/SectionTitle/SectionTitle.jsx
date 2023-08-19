export const SectionTitle = ({ text, numb }) => {
  return (
    <h2 className="title">
      {text}
      <span className="title__numb">{numb}</span>
    </h2>
  );
};

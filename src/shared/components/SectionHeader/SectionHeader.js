import "./sectionHeader.css";

const SectionHeader = ({ title, highlight, end, align = "center" }) => {
  return (
    <h1 className={`section-header-title ${align}`}>
      {title} <span className="highlight">{highlight}</span> {end}
    </h1>
  );
};

export default SectionHeader;

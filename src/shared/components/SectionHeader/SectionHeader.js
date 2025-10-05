import "./sectionHeader.css";

const SectionHeader = ({ title, align = "center" }) => {
  return <h1 className={`section-header-title ${align}`}>{title}</h1>;
};

export default SectionHeader;

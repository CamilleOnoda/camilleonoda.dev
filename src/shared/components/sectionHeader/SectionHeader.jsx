import "./SectionHeader.css";

// SectionHeader: Reusable heading component with optional alignment
const SectionHeader = ({ title, align = "center" }) => {
  return <h2 className={`section-header-title ${align}`}>{title}</h2>;
};

export default SectionHeader;

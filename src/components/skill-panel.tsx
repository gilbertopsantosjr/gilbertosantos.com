type SkillPanelProp = {
  title: string;
  subtitle: string;
  description: string;
};
export default function SkillsPanel({
  title,
  subtitle,
  description,
}: SkillPanelProp) {
  return (
    <>
      <div className="qualification-data">
        <div>
          <h3 className="qualification-title">{title}</h3>
          <span className="qualification-subtitle">{subtitle}</span>
          <div className="qualification-date">
            <i className="fa-solid fa-calendar-days"></i>
            {description}
          </div>
        </div>
        <div>
          <span className="qualification-round"></span>
          <span className="qualification-line"></span>
        </div>
      </div>
    </>
  );
}

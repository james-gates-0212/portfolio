import SkillSets from '@/infos/Skillsets';

const Skills = () => (
  <div className="justify-center pb-12">
    {SkillSets.map(({ section, skills }, sIdx) => (
      <div key={`tech-section-${sIdx}`}>
        <p className="text-2xl mt-10 mb-6 text-center">{section}</p>
        <ul className="tech-icons">
          {skills.map(({ className, icon: Icon, label }, tIdx) => (
            <li
              className={[className, 'title-tooltip'].filter(Boolean).join(' ')}
              data-tooltip-content={label}
              key={`tech-item-${sIdx}-${tIdx}`}
            >
              <Icon />
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Skills;

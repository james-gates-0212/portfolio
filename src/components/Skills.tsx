import SkillSetInfos from '@/infos/SkillSetInfos';
import styles from './skills.module.css';
import { classNames } from '@/components/Commons';

const Skills = () => (
  <div className="justify-center pb-12">
    {SkillSetInfos.map(({ section, skills }, sIdx) => (
      <div key={`tech-section-${sIdx}`}>
        <p className="text-2xl mt-10 mb-6 text-center">{section}</p>
        <ul className={styles.techIcons}>
          {skills.map(({ className, icon: Icon, label }, tIdx) => (
            <li
              className={classNames(className, 'title-tooltip')}
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

import { BallCanvas } from '../canvas';
import SectionWrapper from '../../sectionWrapper/SectionWrapper';
import { technologies } from '../../constants';

export default function Tech() {
  return (
    <SectionWrapper idName=''>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((tech) => (
          <div className='w-28 h-28' key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

// No type declarations found for 'react-tilt' going to tell TypeScript to ignore this
//@ts-ignore
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../../styles';
import { github } from '../../assets';
import SectionWrapper from '../../sectionWrapper/SectionWrapper';
import { projects, staticPortfolio } from '../../constants';
import { fadeIn, textVariant } from '../../utils/motion';

export default function Projects() {
  return (
    <SectionWrapper idName='projects'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects showcase my skills and experience through real-world examples of my work. Each project
          is described briefly with relevant links to my code or hosted application. They reflect my ability to work
          with different technologies, and manage projects effectively. There are more projects showcased on my static
          portfolio{' '}
          <a
            href={`${staticPortfolio}projects`}
            target='_blank'
            className='text-[#915eff] hover:underline underline-offset-2 cursor-pointer'
          >
            here
          </a>
          .
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
  hosted_application_link?: string;
}

function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  hosted_application_link
}: ProjectCardProps) {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-60'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={github} alt='github' className='w-1/2 h-1/2 object-contain' />
            </div>
            {hosted_application_link && (
              <div
                onClick={() => window.open(hosted_application_link, '_blank')}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2'
              >
                <p>{'<>'}</p>
              </div>
            )}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-2xl'>{name}</h3>
          <p className='mt-2 text-secondary text-sm'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag, index) => (
            <p key={tag.name} className={`text-sm ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

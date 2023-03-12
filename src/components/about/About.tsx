// No type declarations found for 'react-tilt' going to tell TypeScript to ignore this
//@ts-ignore
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../../styles';
import { services } from '../../constants';
import { fadeIn, textVariant } from '../../utils/motion';
import SectionWrapper from '../../sectionWrapper/SectionWrapper';

export default function About() {
  return (
    <SectionWrapper idName='about'>
      <motion.div variants={textVariant(10)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p className='mt-4 text-secondary text-[17px] max-w-3xl leading-8' variants={fadeIn('', '', 0.1, 1)}>
        I am a full-stack developer based in Tampa, Florida. With a passion for solving problems, both physical and
        digital. I began on a law school track but my love for computers and desire to problem-solve for as many people
        as possible led me to a career in web and software development. When not online I love tinkering as much as
        possible; whether that be building computers or playing board games with my family. Currently, I am open to new
        opportunities, freelance work, and collaboration projects. I can be reached{' '}
        <a className='text-[#915eff] hover:underline underline-offset-2 cursor-pointer' href={`#contact`}>
          here
        </a>
        .
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
}

interface ServiceCardProps {
  title: string;
  index: number;
  icon: string;
}

function ServiceCard({ title, index, icon }: ServiceCardProps) {
  return (
    <Tilt className='xs:w-64 w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-3xl shadow-card'
      >
        <div className='bg-tertiary rounded-3xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-xl font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

import { motion } from 'framer-motion';

import { styles } from '../../styles';
import SectionWrapper from '../../sectionWrapper/SectionWrapper';
import { fadeIn, textVariant } from '../../utils/motion';
import { testimonials } from '../../constants';

export default function Feedbacks() {
  return (
    <SectionWrapper idName=''>
      <div className='mt-12 bg-black-100 rounded-[20px]'>
        <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What others say</p>
            <h2 className={styles.sectionHeadText}>Testimonials.</h2>
          </motion.div>
        </div>
        <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={index} index={index} {...testimonial} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

interface FeedbackCardProps {
  index: number;
  testimonial: string;
  name: string;
  designation?: string;
  company?: string;
  image: string;

  website?: string;
}

function FeedbackCard({ index, testimonial, designation, name, company, image, website = '' }: FeedbackCardProps) {
  return (
    <a
      href={website.length > 0 ? website : undefined}
      target='_blank'
      className={website.length > 1 ? 'hover:scale-105 transition-all duration-200 ease-in-out' : ''}
    >
      <motion.div
        variants={fadeIn('', 'spring', index * 0.5, 0.75)}
        className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
      >
        <p className='text-white font-black text-5xl'>"</p>
        <div className='mt-1 '>
          <p className='text-white tracking-wider text-lg'>{testimonial}</p>
          <div className='mt-7 flex justify-between items-center gap-1'>
            <div className='flex-1 flex flex-col'>
              <p className='text-white font-medium'>
                <span className='blue-text-gradient'>@</span> {name}
              </p>
              {designation || company ? (
                <p className='mt-1 text-secondary text-xs'>
                  {designation ? designation + ' at ' : null}
                  {company ? company : null}
                </p>
              ) : null}
            </div>
            <img src={image} alt={`feedback from ${name}`} className='w-10 h-10 rounded-full object-cover' />
          </div>
        </div>
      </motion.div>
    </a>
  );
}

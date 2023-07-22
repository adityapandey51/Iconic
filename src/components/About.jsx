import {Tilt} from "react-tilt"
import {motion} from "framer-motion";
import { SectionWrapper } from "../hoc";
import {styles} from "../styles";
import PropTypes from 'prop-types'; 


import{services} from "../constans/index.js";
import{fadeIn, textVariant} from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

ServiceCard.propTypes={
  title:PropTypes.String
}

const About = () => {
  return (
   <>
   <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>Overview.</h2>
   </motion.div>

   <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
   At Iconic Solutions, we are passionate about turning ideas into captivating visual experiences. As a leading digital solution agency, we thrive on pushing the boundaries of design, igniting imagination, and crafting stunning visuals that leave a lasting impression. Our team of highly skilled designers, developers, and visionaries work collaboratively to bring your brand's essence to life through innovative and unique design solutions.
   </motion.p>

   <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
   </>
  )
}

export default SectionWrapper(About, "about");
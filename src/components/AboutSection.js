import home1 from '../img/alien.jpg';
import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from '../styles';
//Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div
        /*    variants={container}
          initial="hidden"
          animate="show"
          className="title" */
        >
          <StyledHide>
            <motion.h2 variants={titleAnim}>Do you also want to</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              <span>believe</span> the truth is out
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>there?</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography evidence that you have.
          We have professionals looking at your stuff.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={photoAnim} src={home1} alt="guy with camera" />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default AboutSection;

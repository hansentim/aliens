import styled from 'styled-components';
import { StyledAbout } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { motion } from 'framer-motion';
import { useScroll } from './useScroll';
import { fadeSlow, scrollReveal, fade } from '../animation';

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledFaq
      variants={scrollReveal}
      animate={controls}
      ref={element}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout type="crossfade">
        <Toggle title="How Do I Start?">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeSlow}
            layout
            className="answer"
          >
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              modi.
            </p>
          </motion.div>
        </Toggle>

        <Toggle title="Daily Schedule">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeSlow}
            layout
            className="answer"
          >
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              modi.
            </p>
          </motion.div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeSlow}
            layout
            className="answer"
          >
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              modi.
            </p>
          </motion.div>
        </Toggle>
        <Toggle title="What Products Do You Offer?">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeSlow}
            layout
            className="answer"
          >
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              modi.
            </p>
          </motion.div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    /*   padding: 3rem; */
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
  /*  .answer:after {
    display: block;
    content: '';
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  } */
`;

export default FaqSection;

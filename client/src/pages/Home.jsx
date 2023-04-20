import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./logomate2.png'
              alt="logo"
              className="w-20 h-20 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1s className="text-7xl">
                <b>Unleash Your Creativity <br/>
                with DALL-E Designs</b>

                {/* Let's <br className="xl:block hidden" /> Do It. */}
              </h1s>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base text-justify">
              Our website provides a unique and innovative way to design your shirt. 
              With the help of DALL-E, an AI-powered image generation system, you can create a logo that is personalized, 
              creative, and truly one-of-a-kind. DALL-E uses machine learning algorithms to generate images that are inspired 
              by the user's input, allowing for endless possibilities in logo design. So, unleash your creativity and design a
              shirt that truly represents you with DALL-E Designs.
              </p>

              <CustomButton 
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'

import  { headContainerAnimation, 
  headContentAnimation, 
  headTextAnimation, slideAnimation} from '../config/motion'

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img src='./threejs.png' alt="logo" className="w-8 h-8 object-contain" />
          </motion.header>
          <motion.div {...headContainerAnimation} className="home-content">
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>LET'S <br className="xl:block hidden" /> DO IT.</h1>
            </motion.div>
            <motion.div>
              <p>Create your unique and exclusive shirt with our brand-new 3d customization tool. <strong>Unleash your imagination</strong> and define your own style.</p>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home

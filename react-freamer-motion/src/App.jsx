import { motion } from 'framer-motion'
import './App.css'

function App () {
  return (
    <>
      {/* <div className='App'>
        <motion.h1
          initial={{ color: '#fff000' }}
          transition={{ duration: 5, delay: 3 }}
          animate={{ y: 100, color: '#c0dd' }}
        >Framer Motion
        </motion.h1>
      </div> */}

      <motion.div
        className='box'
        initial={{ scale: 0.5 }}
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: '100%'
        }}
      />

    </>
  )
}

export default App

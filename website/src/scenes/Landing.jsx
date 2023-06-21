import React from 'react'
import { motion } from "framer-motion"

const Landing = () => {
  return (
    <section>
      { /* HOME PAGE */}
      <div>
        { /* HEADING */ }
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.75 }}
            variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 }
            }}
        >
          <div className="text-center text-lg">
            
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Landing
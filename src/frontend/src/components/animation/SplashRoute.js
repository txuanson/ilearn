import React from "react";
import { motion } from "framer-motion";

export default function SplashRoute({ children, key }) {
  return (
    <motion.div
      key={key}
      initial="pageInitial"
      animate="pageAnimate"
      transition={{ duration: 0.25 }}

      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
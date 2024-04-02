import { motion } from "framer-motion";
import React from 'react'

interface Props {
    children: JSX.Element,
    className?: string,
    duration: number
}

function Reveal({ children, className, duration} : Props) {

    const cardVariant = {
        visible: { y:0, opacity: 1, transition: { duration: duration } },
        hidden: { y:100, opacity: 0 },
    }

    return (
        <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default Reveal

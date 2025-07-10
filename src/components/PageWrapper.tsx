import React, { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

const pageVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
}

type props = {
    children: ReactNode
};

const PageWrapper: FC<props> = ({ children }) => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={pageVariant}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className='min-h-screen bg-gray-50 '
        >
            {children}
        </motion.div>
    )
}

export default PageWrapper

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function StickyScrollSection({ children, index = 0, total = 1 }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start center', 'end center'],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (0.05 * (total - index))]);
    const translateY = useTransform(scrollYProgress, [0, 1], [0, (50 * index)]);

    const zIndex = index + 1;

    return (
        <motion.div
            ref={ref}
            style={{ scale, y: translateY, zIndex }}
            className="sticky top-0"
        >
            {children}
        </motion.div>
    );
}

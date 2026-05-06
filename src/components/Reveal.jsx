import { motion } from 'framer-motion';

export default function Reveal({ children, delay = 0, as = 'div', className = '', ...rest }) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.85, delay, ease: 'easeOut' }}
      {...rest}
    >
      {children}
    </Component>
  );
}

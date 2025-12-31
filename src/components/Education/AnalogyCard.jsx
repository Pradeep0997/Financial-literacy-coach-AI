import { motion } from 'framer-motion';

const AnalogyCard = ({ icon: Icon, title, analogy, description }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full"
    >
      <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center mb-4 text-brand-600">
        <Icon size={28} />
      </div>
      <h3 className="font-bold text-gray-800 text-lg mb-1">{title}</h3>
      <div className="text-xs font-semibold uppercase tracking-wider text-accent-500 mb-3 bg-accent-50 px-2 py-1 rounded-md">
        Is like a {analogy}
      </div>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};
export default AnalogyCard;

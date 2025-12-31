import ReactMarkdown from 'react-markdown';
import { Bot, User } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const MessageBubble = ({ role, text }) => {
  const isAi = role === 'model';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={clsx(
        "flex gap-3 max-w-[90%]",
        isAi ? "self-start" : "self-end flex-row-reverse"
      )}
    >
      {/* Avatar */}
      <div className={clsx(
        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm",
        isAi ? "bg-white border border-brand-100 text-brand-600" : "bg-accent-100 text-accent-600"
      )}>
        {isAi ? <Bot size={18} /> : <User size={18} />}
      </div>

      {/* Bubble */}
      <div className={clsx(
        "p-4 rounded-2xl text-sm leading-relaxed shadow-sm",
        isAi 
          ? "bg-white border border-gray-100 text-gray-800 rounded-tl-none" 
          : "bg-gradient-to-br from-brand-600 to-brand-500 text-white rounded-tr-none"
      )}>
        {isAi ? (
          /* 👇 FIX: We moved 'className' to this wrapper div */
          <div className="prose prose-sm max-w-none prose-p:my-1 prose-headings:text-brand-700 prose-strong:text-brand-800 prose-ul:my-2">
            <ReactMarkdown
              components={{
                ul: ({node, ...props}) => <ul className="list-disc pl-4 space-y-1" {...props} />,
                li: ({node, ...props}) => <li className="marker:text-brand-500" {...props} />,
                strong: ({node, ...props}) => <strong className="font-bold text-brand-700" {...props} />
              }}
            >
              {text}
            </ReactMarkdown>
          </div>
        ) : (
          <p>{text}</p>
        )}
      </div>
    </motion.div>
  );
};
export default MessageBubble;

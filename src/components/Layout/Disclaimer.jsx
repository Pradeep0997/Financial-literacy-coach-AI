import { AlertTriangle } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="bg-amber-50 border-t border-amber-100 p-4 mt-auto">
      <div className="max-w-4xl mx-auto flex gap-3 text-xs text-amber-800/80 items-start">
        <AlertTriangle size={16} className="shrink-0 mt-0.5" />
        <p>
          <strong>Educational Only:</strong> FinMantra is an AI prototype for financial literacy. 
          Information provided is not financial advice. Market investments are subject to risk. 
          Please consult a SEBI registered advisor before investing.
        </p>
      </div>
    </div>
  );
};
export default Disclaimer;

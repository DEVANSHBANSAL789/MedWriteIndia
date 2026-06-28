import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items, className = '' }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={`divide-y divide-gray-100 ${className}`}>
      {items.map((item, i) => (
        <div key={i}>
          <button
            className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-150 ${openIndex === i ? 'bg-emerald-50 text-emerald-800' : 'hover:bg-gray-50 text-gray-800'}`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className={`font-semibold text-base pr-4 ${openIndex === i ? 'text-emerald-800' : 'text-gray-800'}`}>
              {item.question || item.title}
            </span>
            <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-emerald-700' : 'text-gray-400'}`} />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="px-6 pb-5 pt-2">
              <p className="text-gray-600 leading-relaxed">{item.answer || item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

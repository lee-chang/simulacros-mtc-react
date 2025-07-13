import React, { useState, useEffect, useRef } from 'react';
import type { IQuestion } from '../types';

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

interface QuestionDisplayProps {
  question: IQuestion;
  onAnswerSelect: (selectedCode: string) => void;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question, onAnswerSelect }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedAnswer(null);
    const container = scrollContainerRef.current;
    if (container) {
        container.scrollTop = 0;
        // Let the DOM update before checking scroll height
        setTimeout(() => {
            if (container.scrollHeight > container.clientHeight) {
                setShowScrollHint(true);
            } else {
                setShowScrollHint(false);
            }
        }, 150);
    }
  }, [question]);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      if (container.scrollTop > 50) {
        setShowScrollHint(false);
      }
    }
  };

  const handleScrollHintClick = () => {
    scrollContainerRef.current?.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth'
    });
  };

  const handleOptionClick = (code: string) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(code);
    setTimeout(() => {
      onAnswerSelect(code);
    }, 1200);
  };

  const getButtonClass = (optionCode: string) => {
    // Before an answer is selected
    if (selectedAnswer === null) {
      return 'bg-slate-100 dark:bg-slate-900/70 border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 text-slate-800 dark:text-slate-200';
    }

    const isCorrect = optionCode === question.answer;
    const isSelected = optionCode === selectedAnswer;

    // After an answer is selected
    if (isCorrect) {
        return 'bg-green-500 border-green-600 text-white pulse'; // Correct answer
    }
    if (isSelected && !isCorrect) {
        return 'bg-red-500 border-red-600 text-white shake'; // Selected wrong answer
    }
    
    // Other non-selected options after a choice has been made
    return 'bg-slate-100 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 opacity-60 cursor-not-allowed';
  };

  return (
    <div className="grow flex flex-col overflow-hidden">
      {/* Scrollable content area */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="grow overflow-y-auto p-4 sm:p-6 bg-white dark:bg-slate-800"
      >
        <h2 className="font-bold text-slate-800 dark:text-slate-100 mb-6">
          {question.question}
        </h2>
      
        {question.image && (
          <div className="w-full h-full flex justify-center">
            <img src={question.image} alt="Imagen para la pregunta" className="mx-auto rounded-lg max-h-48 sm:max-h-64 shadow-lg bg-white" />
          </div>
        )}
        
        {showScrollHint && (
          <div className="w-full h-16 flex justify-center items-center sticky bottom-2 sm:hidden">
            <button
              onClick={handleScrollHintClick}
              className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg animate-bounce"
              aria-label="Desplazarse hacia abajo"
            >
              <ChevronDownIcon />
            </button>
          </div>
        )}
      </div>

      {/* Options container */}
      <div className="p-4 sm:p-6 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 sm:border-none rounded-b-2xl">
        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option.code}
              onClick={() => handleOptionClick(option.code)}
              disabled={selectedAnswer !== null}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 flex items-center justify-between focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 ${getButtonClass(option.code)}`}
            >
              <span className="font-bold mr-3">{option.code})</span>
              <span className="flex-1">{option.description}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionDisplay;

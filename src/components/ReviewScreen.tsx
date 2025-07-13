
import React from 'react';
import { IQuestion, UserAnswerMap } from '../types';

interface ReviewScreenProps {
  questions: IQuestion[];
  userAnswers: UserAnswerMap;
  onBack: () => void;
}

const BackIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>;
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-white shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>;
const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-white shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.697a1 1 0 010-1.414z" clipRule="evenodd" /></svg>;


const ReviewScreen: React.FC<ReviewScreenProps> = ({ questions, userAnswers, onBack }) => {
  const getOptionClass = (question: IQuestion, optionCode: string, userAnswer: string | undefined) => {
    const isCorrect = optionCode === question.answer;
    const isSelected = optionCode === userAnswer;
    
    if (isCorrect) {
      return 'bg-green-500 border-green-600 text-white';
    }
    if (isSelected && !isCorrect) {
      return 'bg-red-500 border-red-600 text-white';
    }
    return 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 opacity-80';
  };

  return (
    <div className="w-full sm:max-w-2xl mx-auto bg-white dark:bg-slate-800 sm:rounded-2xl shadow-xl dark:shadow-black/20 h-full sm:h-auto flex flex-col fade-in">
      <header className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center sticky top-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm z-10">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors mr-4">
          <BackIcon />
        </button>
        <h2 className="text-xl font-bold">Revisar Respuestas</h2>
      </header>

      <div className="overflow-y-auto grow">
        {questions.map((q, index) => (
          <div key={q.n} className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-700 last:border-b-0">
            <p className="font-semibold mb-1 text-slate-500 dark:text-slate-400">Pregunta {index + 1}</p>
            <h3 className="text-lg font-bold mb-4">{q.question}</h3>
            
            {q.image && (
              <div className="w-full flex justify-center mb-4">
                <img src={q.image} alt={`Imagen para la pregunta ${index+1}`} className="mx-auto rounded-lg max-h-48 shadow-lg bg-white" />
              </div>
            )}

            <div className="space-y-3">
              {q.options.map(option => {
                const isCorrect = option.code === q.answer;
                const isSelected = option.code === userAnswers[index];
                
                return (
                  <div
                    key={option.code}
                    className={`w-full text-left p-3 rounded-lg border-2 transition-colors duration-300 flex justify-between items-center ${getOptionClass(q, option.code, userAnswers[index])}`}
                  >
                    <div className="flex-1">
                      <span className="font-bold mr-3">{option.code})</span>
                      <span>{option.description}</span>
                    </div>
                    {isCorrect && <CheckIcon />}
                    {isSelected && !isCorrect && <XIcon />}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewScreen;

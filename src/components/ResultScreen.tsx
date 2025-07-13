
import React, { useState } from 'react';
import { PASS_SCORE } from '../constants';
import ShareModal from './ShareModal'; // Import the new modal component

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onRetry: () => void;
  onReview: () => void;
}

// ShareIcon is no longer needed here, it's in ShareModal
const ShareIcon: React.FC<{ className?: string }> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.195.025.39.042.583.057m-3.478 4.372a3.375 3.375 0 006.337 0m-6.337 0l-1.262 1.262a2.25 2.25 0 003.182 3.182l1.262-1.262M12 12l-2.121-2.121a2.25 2.25 0 00-3.182 3.182l2.121 2.121m0 0l2.121 2.121a2.25 2.25 0 003.182-3.182l-2.121-2.121m-3.182-3.182a2.25 2.25 0 00-3.182 0L2.25 12.75l3.182 3.182" />
  </svg>
);


const CircularProgress: React.FC<{ percentage: number; color: string; bgColor: string; size?: number, strokeWidth?: number }> = ({ percentage, color, bgColor, size=160, strokeWidth=12 }) => {
    const radius = (size / 2) - (strokeWidth * 2);
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative" style={{ width: size, height: size }}>
            <svg className="transform -rotate-90" width={size} height={size}>
                <circle
                    className={bgColor}
                    strokeWidth={strokeWidth}
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                <circle
                    className={color}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    style={{ transition: 'stroke-dashoffset 0.8s ease-out' }}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-4xl font-extrabold text-slate-700 dark:text-slate-200">{Math.round(percentage)}%</span>
            </div>
        </div>
    );
};

const GithubIcon: React.FC<{ className?: string }> = (props) => (
  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" {...props}><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"></path></svg>
);

const InstagramIcon: React.FC<{ className?: string }> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" {...props}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"></path></svg>
);


const ResultScreen: React.FC<ResultScreenProps> = ({ score, totalQuestions, onRetry, onReview }) => {
  const [isShareModalOpen, setShareModalOpen] = useState(false);
  const hasPassed = score >= PASS_SCORE;
  const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
  const correctAnswers = score;
  const incorrectAnswers = totalQuestions - score;

  const title = hasPassed ? '¡Felicitaciones, APROBASTE!' : '¡Oh no, DESAPROBASTE!';
  const titleColor = hasPassed ? 'text-green-500' : 'text-red-500';
  const message = hasPassed 
    ? 'Has superado el simulacro con éxito.' 
    : `Necesitabas ${PASS_SCORE} puntos para aprobar. ¡Sigue practicando!`;

  const shareText = `¡Obtuve ${score} de ${totalQuestions} en el simulador de examen de manejo de Perú! 🇵🇪\n\nPon a prueba tus conocimientos.`;
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      <div className="w-full sm:max-w-2xl mx-auto bg-white dark:bg-slate-800 sm:rounded-2xl shadow-xl dark:shadow-black/20 text-center fade-in h-full sm:h-auto flex flex-col justify-center p-6 sm:p-8">
          <h2 className={`text-3xl md:text-4xl font-extrabold mb-2 ${titleColor}`}>{title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">{message}</p>
          
          <div className="my-6 flex justify-center">
              <CircularProgress 
                percentage={percentage} 
                color={hasPassed ? "text-green-500" : "text-red-500"} 
                bgColor="text-slate-200 dark:text-slate-700"
              />
          </div>
          
          <div className="flex justify-around items-center mb-8 bg-slate-100 dark:bg-slate-700/50 p-4 rounded-xl">
              <div className="text-center">
                  <p className="text-3xl font-bold text-green-500">{correctAnswers}</p>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">Correctas</p>
              </div>
              <div className="text-center">
                  <p className="text-3xl font-bold text-red-500">{incorrectAnswers}</p>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">Incorrectas</p>
              </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
              <button 
                  onClick={onReview}
                  className="w-full transition-all duration-300 bg-slate-600 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-800"
              >
                  Revisar Respuestas
              </button>
              <button 
                  onClick={onRetry}
                  className="w-full transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                  Intentar de Nuevo
              </button>
              <div className="sm:col-span-2">
                <button 
                    onClick={() => setShareModalOpen(true)}
                    className="w-full flex items-center justify-center gap-3 transition-all duration-300 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
                >
                    <ShareIcon className="w-6 h-6" />
                    Compartir Resultados
                </button>
              </div>
          </div>
          <footer className="w-full text-center pt-8 mt-8 border-t border-slate-200 dark:border-slate-700">
            <p className="text-slate-600 dark:text-slate-300 font-semibold mb-4">¿Te sirvió esta herramienta? ¡Apoya al creador!</p>
            <div className="flex justify-center items-center gap-4">
              <a href="https://github.com/lee-chang/test1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                <GithubIcon className="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                <span>Dar una estrella</span>
              </a>
              <div className="h-6 border-l border-slate-300 dark:border-slate-600"></div>
              <a href="https://www.instagram.com/tu-usuario-de-instagram" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-pink-600 dark:hover:text-pink-400 transition-colors group">
                <InstagramIcon className="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors" />
                <span>Seguir en Instagram</span>
              </a>
            </div>
          </footer>
      </div>
      <ShareModal 
        isOpen={isShareModalOpen}
        onClose={() => setShareModalOpen(false)}
        shareText={shareText}
        shareUrl={shareUrl}
      />
    </>
  );
};

export default ResultScreen;

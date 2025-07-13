
import React from 'react';
import { PASS_SCORE } from '../constants';
import ImgMTC from '../images/mtc-logo.jpg';

interface StartScreenProps {
  onStart: () => void;
  isLoading: boolean;
  totalQuestions: number;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart, isLoading, totalQuestions }) => {
  return (
    <div className="w-full sm:max-w-2xl mx-auto bg-white dark:bg-slate-800 sm:rounded-2xl shadow-xl dark:shadow-black/20 text-center fade-in h-full sm:h-auto flex flex-col justify-center p-6 sm:p-10">
        <img src={ImgMTC} alt="Logo del Ministerio de Transportes y Comunicaciones" className="h-16 sm:h-20 w-auto mx-auto mb-6" />
        <h1 className="font-extrabold text-slate-800 dark:text-slate-100 mb-4 text-2xl md:text-3xl">
          Simulador de Examen de Manejo
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 font-medium">Clase A - Categoría I (Perú)</p>
        
        <div className="bg-slate-100 dark:bg-slate-700/50 border-l-4 border-blue-500 text-slate-700 dark:text-slate-300 p-4 rounded-lg mb-10 text-left">
          <h3 className="font-bold mb-2">Instrucciones:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Responderás <strong>{totalQuestions} preguntas</strong> del balotario oficial.</li>
            <li>Tienes <strong>40 minutos</strong> para completar el examen.</li>
            <li>Cada respuesta correcta vale <strong>1 punto</strong>.</li>
            <li>Respuestas incorrectas <strong>no restan puntos</strong>.</li>
            <li>Necesitas <strong>{PASS_SCORE} puntos</strong> o más para aprobar.</li>
          </ul>
        </div>
        
        <button
          onClick={onStart}
          disabled={isLoading}
          className="w-full md:w-auto transition-all duration-300 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 dark:disabled:bg-blue-800 disabled:cursor-wait text-white font-bold py-3 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          {isLoading ? 'Cargando...' : '¡Comenzar Simulacro!'}
        </button>
      </div>
  );
};

export default StartScreen;
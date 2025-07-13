import React, { useState, useCallback, useEffect } from "react";
import type { IQuestion } from "./types";
import { GameState } from "./types";
import type { UserAnswerMap } from "./types";
import { QUIZ_LENGTH } from "./constants";
import { ALL_QUESTIONS } from "./data/questions";
import StartScreen from "./components/StartScreen";
import ResultScreen from "./components/ResultScreen";
import QuestionDisplay from "./components/QuestionDisplay";
import Spinner from "./components/Spinner";
import ReviewScreen from "./components/ReviewScreen";
import Timer from "./components/Timer";

const SunIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);
const MoonIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const ThemeToggler: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined" && localStorage.getItem("theme")) {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "dark" || storedTheme === "light") return storedTheme;
    }
    if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));

  return (
    <button onClick={toggleTheme} className="relative w-10 h-10 p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 dark:focus:ring-offset-slate-900 focus:ring-blue-500" aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
      <SunIcon className={`w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${theme === "light" ? "transform rotate-0 scale-100 opacity-100" : "transform -rotate-90 scale-0 opacity-0"}`} />
      <MoonIcon className={`w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${theme === "dark" ? "transform rotate-0 scale-100 opacity-100" : "transform rotate-90 scale-0 opacity-0"}`} />
    </button>
  );
};

const FONT_SIZES = ['text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl'];
const DEFAULT_FONT_SIZE_INDEX = 1;
const QUIZ_DURATION_SECONDS = 40 * 60;

const FontSizeToggler: React.FC<{ increase: () => void; decrease: () => void; isMin: boolean; isMax: boolean; }> = ({ increase, decrease, isMin, isMax }) => (
  <div className="flex items-center gap-1 mr-2">
    <button onClick={decrease} disabled={isMin} className="w-9 h-9 p-1 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed" aria-label="Decrease font size">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" /></svg>
    </button>
    <span className="font-semibold text-slate-700 dark:text-slate-300 select-none text-lg">A</span>
    <button onClick={increase} disabled={isMax} className="w-9 h-9 p-1 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed" aria-label="Increase font size">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
    </button>
  </div>
);

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Start);
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswerMap>({});
  const [remainingTime, setRemainingTime] = useState(QUIZ_DURATION_SECONDS);
  
  const [fontSizeIndex, setFontSizeIndex] = useState<number>(() => {
    if (typeof window === 'undefined') return DEFAULT_FONT_SIZE_INDEX;
    const savedSizeIndex = localStorage.getItem('fontSizeIndex');
    return savedSizeIndex ? parseInt(savedSizeIndex, 10) : DEFAULT_FONT_SIZE_INDEX;
  });

  useEffect(() => {
    localStorage.setItem('fontSizeIndex', fontSizeIndex.toString());
  }, [fontSizeIndex]);

  useEffect(() => {
    if (gameState !== GameState.Quiz) return;

    const timer = setInterval(() => {
      setRemainingTime(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setGameState(GameState.Results);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState]);

  const increaseFontSize = () => setFontSizeIndex(prev => Math.min(prev + 1, FONT_SIZES.length - 1));
  const decreaseFontSize = () => setFontSizeIndex(prev => Math.max(prev - 1, 0));
  const currentFontSizeClass = FONT_SIZES[fontSizeIndex];

  const handleStartQuiz = useCallback(() => {
    const shuffled = [...ALL_QUESTIONS].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, QUIZ_LENGTH));
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswers({});
    setRemainingTime(QUIZ_DURATION_SECONDS);
    setGameState(GameState.Quiz);
  }, []);

  const handleAnswerSelect = useCallback((selectedCode: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedCode === currentQuestion.answer) {
      setScore(prevScore => prevScore + 1);
    }
    setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: selectedCode }));
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setGameState(GameState.Results);
    }
  }, [currentQuestionIndex, questions]);

  const handleRetry = useCallback(() => {
    setGameState(GameState.Start);
    setQuestions([]);
  }, []);

  const handleReview = useCallback(() => setGameState(GameState.Review), []);
  const handleBackToResults = useCallback(() => setGameState(GameState.Results), []);

  const renderContent = () => {
    switch (gameState) {
      case GameState.Start:
        return <StartScreen onStart={handleStartQuiz} isLoading={false} totalQuestions={QUIZ_LENGTH} />;
      case GameState.Quiz: {
        if (questions.length === 0 || !questions[currentQuestionIndex]) {
          return <Spinner size="lg" text="Cargando pregunta..." />;
        }
        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
        return (
          <div className="w-full h-full flex flex-col sm:max-w-2xl sm:h-auto sm:rounded-2xl shadow-xl dark:shadow-black/20 overflow-hidden bg-white dark:bg-slate-800">
            <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-700">
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-slate-600 dark:text-slate-400">Pregunta {currentQuestionIndex + 1} de {questions.length}</p>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
            <QuestionDisplay question={questions[currentQuestionIndex]} onAnswerSelect={handleAnswerSelect} />
          </div>
        );
      }
      case GameState.Results:
        return <ResultScreen score={score} totalQuestions={questions.length} onRetry={handleRetry} onReview={handleReview} />;
      case GameState.Review:
        return <ReviewScreen questions={questions} userAnswers={userAnswers} onBack={handleBackToResults} />;
      default:
        return <StartScreen onStart={handleStartQuiz} isLoading={false} totalQuestions={QUIZ_LENGTH} />;
    }
  };

  const mainContainerClasses =
    gameState === GameState.Review
      ? 'grow w-full flex justify-center p-0 sm:p-4'
      : 'grow w-full flex items-center justify-center p-0 sm:p-4';

  return (
    <div className={`h-screen w-screen flex flex-col selection:bg-blue-200 dark:selection:bg-blue-800 ${currentFontSizeClass}`}>
      <header className="w-full mx-auto flex justify-between items-center py-2 sm:py-4 px-4">
        <div className="w-1/3">
          {gameState === GameState.Quiz && <Timer remainingTime={remainingTime} />}
        </div>
        <div className="w-1/3 flex justify-end">
          <FontSizeToggler increase={increaseFontSize} decrease={decreaseFontSize} isMin={fontSizeIndex === 0} isMax={fontSizeIndex === FONT_SIZES.length - 1} />
          <ThemeToggler />
        </div>
      </header>
      <main className={mainContainerClasses}>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
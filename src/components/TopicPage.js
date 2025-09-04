import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { javaQuestions, getAllJavaQuestions, shuffleArray } from '../data/javaQuestions';

const TopicPage = () => {
  const { topic } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState(new Set());
  const [showingAnswer, setShowingAnswer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Touch/Swipe state
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const topicTitles = {
    'core-java': 'Core Java Concepts',
    'oops': 'Object-Oriented Programming',
    'memory': 'Memory & Execution',
    'exception-handling': 'Exception Handling',
    'multithreading': 'Multithreading & Concurrency',
    'collections': 'Collections Framework',
    'random': 'Random Questions Challenge'
  };

  const topicIcons = {
    'core-java': '☕',
    'oops': '🏗️',
    'memory': '🧠',
    'exception-handling': '⚠️',
    'multithreading': '🔄',
    'collections': '📚',
    'random': '🎲'
  };

  const topicColors = {
    'core-java': 'from-blue-500 to-indigo-600',
    'oops': 'from-green-500 to-teal-600',
    'memory': 'from-purple-500 to-pink-600',
    'exception-handling': 'from-red-500 to-orange-600',
    'multithreading': 'from-cyan-500 to-blue-600',
    'collections': 'from-yellow-500 to-orange-600',
    'random': 'from-indigo-500 to-purple-600'
  };

  useEffect(() => {
    setIsLoading(true);
    if (topic === 'random') {
      const allQuestions = getAllJavaQuestions();
      setQuestions(shuffleArray(allQuestions));
    } else {
      setQuestions(javaQuestions[topic] || []);
    }
    setCurrentIndex(0);
    setFlippedCards(new Set());
    setShowingAnswer(false);
    setIsLoading(false);
  }, [topic]);

  const handleCardFlip = useCallback(() => {
    setShowingAnswer(!showingAnswer);
    setFlippedCards(prev => new Set([...prev, currentIndex]));
  }, [showingAnswer, currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowingAnswer(false);
    }
  }, [currentIndex, questions.length]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowingAnswer(false);
    }
  }, [currentIndex]);

  const handleKeyPress = useCallback((e) => {
    switch(e.key) {
      case ' ':
        e.preventDefault();
        handleCardFlip();
        break;
      case 'ArrowRight':
        handleNext();
        break;
      case 'ArrowLeft':
        handlePrevious();
        break;
      default:
        break;
    }
  }, [handleCardFlip, handleNext, handlePrevious]);

  // Touch handlers for swipe gestures
  const minSwipeDistance = 50;

  const onTouchStart = useCallback((e) => {
    setTouchEnd(null); // reset end position
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const onTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < questions.length - 1) {
      // Left swipe - go to next question
      handleNext();
    } else if (isRightSwipe && currentIndex > 0) {
      // Right swipe - go to previous question  
      handlePrevious();
    }
  }, [touchStart, touchEnd, currentIndex, questions.length, handleNext, handlePrevious]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading questions...</p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😅</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Topic not found</h1>
          <p className="text-gray-600 mb-6">This topic doesn't exist or has no questions yet.</p>
          <Link 
            to="/java" 
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            ← Back to Java Topics
          </Link>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link 
              to="/java" 
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <span className="text-xl">←</span>
              <span className="font-medium text-gray-700">Back to Java</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                {currentIndex + 1} of {questions.length}
              </div>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Topic Header */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-2">{topicIcons[topic]}</div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {topicTitles[topic]}
          </h1>
          <p className="text-gray-600">
            {topic === 'random' ? 'Mixed questions from all Java topics' : 'Master the concepts with interactive flashcards'}
          </p>
        </div>

        {/* Flashcard */}
        <div className="relative mb-8">
          <div 
            className={`card-flip ${showingAnswer ? 'flipped' : ''} cursor-pointer`}
            onClick={handleCardFlip}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="card-inner h-96">
              {/* Front of card (Question) */}
              <div className={`card-front bg-gradient-to-br ${topicColors[topic]} text-white flex items-center justify-center shadow-2xl`}>
                <div className="text-center p-8">
                  <div className="text-sm font-medium mb-4 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
                    Question {currentIndex + 1}
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold leading-relaxed">
                    {currentQuestion.question}
                  </h2>
                  <div className="mt-8 text-sm opacity-80">
                    <div>Click or press Space to reveal answer</div>
                    <div className="mt-2 md:hidden text-xs">Swipe left/right to navigate</div>
                  </div>
                </div>
              </div>

              {/* Back of card (Answer) */}
              <div className="card-back bg-white text-gray-800 flex items-center justify-center shadow-2xl border">
                <div className="text-center p-8">
                  <div className="text-sm font-medium text-green-600 mb-4 bg-green-50 rounded-full px-4 py-2 inline-block">
                    Answer
                  </div>
                  <div className="text-base md:text-lg leading-relaxed text-left max-w-2xl">
                    {currentQuestion.answer}
                  </div>
                  <div className="mt-8 text-sm text-gray-500">
                    <div>Click or press Space to see question again</div>
                    <div className="mt-2 md:hidden text-xs">Swipe left/right to navigate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
              currentIndex === 0 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
            }`}
          >
            <span>←</span>
            <span>Previous</span>
          </button>

          <div className="flex space-x-4">
            <button
              onClick={handleCardFlip}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg"
            >
              {showingAnswer ? 'Show Question' : 'Show Answer'}
            </button>
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex === questions.length - 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
              currentIndex === questions.length - 1 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
            }`}
          >
            <span>Next</span>
            <span>→</span>
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-8">
          {questions.slice(0, 50).map((_, index) => (
            <button
              key={index}
              onClick={() => {setCurrentIndex(index); setShowingAnswer(false);}}
              className={`h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-blue-500 scale-125' 
                  : flippedCards.has(index)
                    ? 'bg-green-400'
                    : 'bg-gray-300'
              }`}
              title={`Question ${index + 1}`}
            />
          ))}
          {questions.length > 50 && (
            <div className="h-3 flex items-center text-xs text-gray-500">
              +{questions.length - 50}
            </div>
          )}
        </div>

        {/* Controls Info */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="font-semibold text-gray-800 mb-3">Navigation Controls</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Desktop Controls */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Desktop</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <kbd className="px-2 py-1 bg-gray-100 rounded border text-xs">Space</kbd>
                  <span className="text-gray-600">Flip card</span>
                </div>
                <div className="flex items-center space-x-2">
                  <kbd className="px-2 py-1 bg-gray-100 rounded border text-xs">←</kbd>
                  <span className="text-gray-600">Previous</span>
                </div>
                <div className="flex items-center space-x-2">
                  <kbd className="px-2 py-1 bg-gray-100 rounded border text-xs">→</kbd>
                  <span className="text-gray-600">Next</span>
                </div>
              </div>
            </div>

            {/* Mobile Controls */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Mobile</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">👆 Tap</span>
                  <span className="text-gray-600">Flip card</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">👈 Swipe</span>
                  <span className="text-gray-600">Next question</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">👉 Swipe</span>
                  <span className="text-gray-600">Previous question</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Completion Message */}
        {currentIndex === questions.length - 1 && flippedCards.has(currentIndex) && (
          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-bounce-in">
            <div className="text-4xl mb-2">🎉</div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Congratulations!</h3>
            <p className="text-green-700 mb-4">
              You've completed all {questions.length} questions in this topic!
            </p>
            <div className="space-x-4">
              <button
                onClick={() => {setCurrentIndex(0); setFlippedCards(new Set()); setShowingAnswer(false);}}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                Review Again
              </button>
              <Link
                to="/java"
                className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Choose Another Topic
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicPage;

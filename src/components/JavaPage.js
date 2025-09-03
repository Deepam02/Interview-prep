import React from 'react';
import { Link } from 'react-router-dom';

const JavaPage = () => {
  const javaTopics = [
    {
      id: 'core-java',
      title: 'Core Java Concepts',
      description: 'JDK, JRE, JVM, Platform Independence, String Pool',
      icon: '☕',
      color: 'from-blue-500 to-indigo-600',
      questionCount: 10
    },
    {
      id: 'oops',
      title: 'Object-Oriented Programming',
      description: 'Abstraction, Encapsulation, Inheritance, Polymorphism',
      icon: '🏗️',
      color: 'from-green-500 to-teal-600',
      questionCount: 12
    },
    {
      id: 'memory',
      title: 'Memory & Execution',
      description: 'Stack vs Heap, Garbage Collection, Classloader',
      icon: '🧠',
      color: 'from-purple-500 to-pink-600',
      questionCount: 8
    },
    {
      id: 'exception-handling',
      title: 'Exception Handling',
      description: 'Checked vs Unchecked, try-catch-finally, Custom Exceptions',
      icon: '⚠️',
      color: 'from-red-500 to-orange-600',
      questionCount: 7
    },
    {
      id: 'multithreading',
      title: 'Multithreading & Concurrency',
      description: 'Threads, Synchronization, ExecutorService, Volatile',
      icon: '🔄',
      color: 'from-cyan-500 to-blue-600',
      questionCount: 15
    },
    {
      id: 'collections',
      title: 'Collections Framework',
      description: 'List, Set, Map, ArrayList, HashMap, TreeMap',
      icon: '📚',
      color: 'from-yellow-500 to-orange-600',
      questionCount: 13
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <span className="text-2xl">←</span>
              <h1 className="text-xl font-semibold text-gray-800">
                Back to Topics
              </h1>
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Java Interview Prep</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="text-center">
          <div className="text-6xl mb-6">☕</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Java Interview Questions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Master Java concepts with interactive flashcards covering everything from 
            basic syntax to advanced concurrency topics.
          </p>
          
          {/* Quick Action */}
          <div className="mb-12">
            <Link 
              to="/java/random"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">🎲</span>
              Random Questions Challenge
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {javaTopics.map((topic) => (
            <Link key={topic.id} to={`/java/${topic.id}`}>
              <div className={`
                relative overflow-hidden rounded-2xl p-6 h-56 
                bg-gradient-to-br ${topic.color}
                transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
                cursor-pointer group
              `}>
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex flex-col h-full justify-between text-white">
                  <div>
                    <div className="text-3xl mb-3">{topic.icon}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-100 transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-sm font-medium">
                        {topic.questionCount} Questions
                      </span>
                    </div>
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <span className="text-lg">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Your Java Interview Journey
            </h2>
            <p className="text-gray-600">
              Complete overview of all available questions and topics
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-1">
                {javaTopics.reduce((total, topic) => total + topic.questionCount, 0)}
              </div>
              <div className="text-gray-600 text-sm">Total Questions</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-1">
                {javaTopics.length}
              </div>
              <div className="text-gray-600 text-sm">Topics Covered</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-1">∞</div>
              <div className="text-gray-600 text-sm">Practice Sessions</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-1">24/7</div>
              <div className="text-gray-600 text-sm">Always Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaPage;

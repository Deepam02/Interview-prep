import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const topics = [
    {
      id: 'java',
      title: 'Java',
      description: 'Core Java, OOP, Collections, Multithreading',
      icon: '☕',
      color: 'from-orange-400 to-red-500',
      textColor: 'text-white',
      available: true
    },
    {
      id: 'dbms',
      title: 'DBMS',
      description: 'Database Management Systems',
      icon: '🗄️',
      color: 'from-blue-400 to-indigo-500',
      textColor: 'text-white',
      available: true
    },
    {
      id: 'os',
      title: 'Operating Systems',
      description: 'Process Management, Memory, File Systems',
      icon: '💻',
      color: 'from-green-400 to-teal-500',
      textColor: 'text-white',
      available: false
    },
    {
      id: 'cn',
      title: 'Computer Networks',
      description: 'TCP/IP, OSI Model, Protocols',
      icon: '🌐',
      color: 'from-purple-400 to-pink-500',
      textColor: 'text-white',
      available: false
    },
    {
      id: 'dsa',
      title: 'Data Structures',
      description: 'Arrays, LinkedList, Trees, Graphs',
      icon: '🔗',
      color: 'from-yellow-400 to-orange-500',
      textColor: 'text-white',
      available: false
    },
    {
      id: 'algorithms',
      title: 'Algorithms',
      description: 'Sorting, Searching, Dynamic Programming',
      icon: '⚡',
      color: 'from-cyan-400 to-blue-500',
      textColor: 'text-white',
      available: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <nav className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">
                🎯 Interview Prep Hub
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white/80 hover:text-white transition-colors">
                About
              </a>
              <a href="#topics" className="text-white/80 hover:text-white transition-colors">
                Topics
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ace Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {' '}Tech Interviews
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Master technical concepts with interactive flashcards, practice questions, 
            and comprehensive study materials designed for modern tech interviews.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-white/70">Questions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-white">6</div>
              <div className="text-white/70">Topics</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-white/70">Free</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-white/70">Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Topics Section */}
      <div id="topics" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Topic
          </h2>
          <p className="text-xl text-white/70">
            Start your preparation journey with our comprehensive study materials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-white/60">
              © 2024 Interview Prep Hub. Built with ❤️ for developers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const TopicCard = ({ topic }) => {
  const CardContent = () => (
    <div className={`
      relative overflow-hidden rounded-xl p-8 h-64 
      bg-gradient-to-br ${topic.color}
      transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
      ${topic.available ? 'cursor-pointer' : 'opacity-75'}
    `}>
      {!topic.available && (
        <div className="absolute top-4 right-4">
          <span className="bg-black/20 text-white text-xs px-3 py-1 rounded-full">
            Coming Soon
          </span>
        </div>
      )}
      
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="text-4xl mb-4">{topic.icon}</div>
          <h3 className={`text-2xl font-bold ${topic.textColor} mb-2`}>
            {topic.title}
          </h3>
          <p className={`${topic.textColor} opacity-90`}>
            {topic.description}
          </p>
        </div>
        
        <div className="flex justify-between items-center">
          <span className={`text-sm ${topic.textColor} opacity-75`}>
            {topic.available ? 'Available Now' : 'Coming Soon'}
          </span>
          {topic.available && (
            <div className={`w-8 h-8 rounded-full ${topic.textColor} flex items-center justify-center`}>
              →
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (topic.available) {
    return (
      <Link to={`/${topic.id}`}>
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
};

export default LandingPage;

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Star, Rocket, Code, Twitter, Github } from 'lucide-react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      title: "Building AGI in Europe",
      icon: <Rocket className="h-12 w-12 text-yellow-400" />,
      content: "Pioneering the future of Artificial General Intelligence right here in Europe.",
    },
    {
      title: "GPT-Engineer",
      icon: <Code className="h-12 w-12 text-orange-500" />,
      content: "One prompt generates an entire codebase. Revolutionizing the way we build software.",
    },
    {
      title: "Previous Experience",
      icon: <Star className="h-12 w-12 text-pink-500" />,
      content: "CERN, Sana Labs, and 2x top YC company experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-pink-200 text-gray-800">
      <header className="fixed top-0 left-0 right-0 z-50 bg-orange-200 bg-opacity-80 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <motion.h1 
            className="text-3xl font-bold text-orange-600"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Anton Osika
          </motion.h1>
          <div className="flex space-x-4">
            <a href="https://twitter.com/antonosika" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-6 w-6 text-blue-400 hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://github.com/AntonOsika" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 text-gray-700 hover:text-gray-900 transition-colors" />
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl font-bold mb-6 text-orange-600">Welcome to My World of AI</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Innovating at the intersection of Artificial Intelligence and Software Engineering
            </p>
          </motion.div>
          <motion.div 
            className="relative w-64 h-64"
            animate={{ rotate: scrollY }}
            style={{ originY: 0.5 }}
          >
            <Sun className="absolute top-0 left-0 h-full w-full text-yellow-400" />
            <Moon className="absolute top-1/4 right-1/4 h-1/2 w-1/2 text-gray-300" />
            <Star className="absolute bottom-1/4 left-1/4 h-1/4 w-1/4 text-white" />
          </motion.div>
        </section>

        {sections.map((section, index) => (
          <motion.section 
            key={index}
            className="min-h-screen flex flex-col justify-center items-center text-center px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="mb-6">{section.icon}</div>
            <h3 className="text-3xl font-bold mb-4 text-orange-700">{section.title}</h3>
            <p className="text-xl max-w-2xl">{section.content}</p>
          </motion.section>
        ))}

        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
          <h3 className="text-3xl font-bold mb-6 text-orange-700">Latest Tweets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            {["Introducing gpt-engineer App👶", "👶🤖 Introducing  `gpt-engineer`", "Insane. It is possible to train a model that beats GPT3.5 in code generation with only:"].map((tweet, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="text-gray-800">{tweet}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-orange-200 text-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Anton Osika. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

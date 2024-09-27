import React, { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const questions = [
  {
    question: "Qu'est-ce que le CRO ?",
    options: [
      "Customer Relationship Optimization",
      "Conversion Rate Optimization",
      "Content Reorganization Opportunity",
      "Creative Research Output"
    ],
    correct: 1
  },
  {
    question: "Quel outil est principalement utilisé pour l'analyse du comportement des utilisateurs sur un site web ?",
    options: [
      "Google Ads",
      "Mailchimp",
      "Hotjar",
      "Canva"
    ],
    correct: 2
  },
  {
    question: "Quelle méthode est couramment utilisée pour tester différentes versions d'une page web ?",
    options: [
      "A/B Testing",
      "SEO Optimization",
      "Social Media Marketing",
      "Email Campaigns"
    ],
    correct: 0
  },
  {
    question: "Quel terme désigne le processus d'amélioration du classement d'un site web dans les résultats des moteurs de recherche ?",
    options: [
      "SEM",
      "PPC",
      "CPC",
      "SEO"
    ],
    correct: 3
  },
  {
    question: "Quel type de contenu est généralement considéré comme le plus efficace pour le marketing B2B ?",
    options: [
      "Vidéos virales",
      "Mèmes",
      "White papers",
      "Stories Instagram"
    ],
    correct: 2
  }
];

const QuizComponent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      {showScore ? (
        <Alert>
          <AlertTitle>Quiz terminé !</AlertTitle>
          <AlertDescription>
            Vous avez obtenu {score} sur {questions.length} points.
          </AlertDescription>
        </Alert>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4">Question {currentQuestion + 1}/{questions.length}</h2>
          <p className="mb-4">{questions[currentQuestion].question}</p>
          <div className="space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                className="w-full p-2 text-left bg-gray-100 hover:bg-gray-200 rounded"
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default QuizComponent;

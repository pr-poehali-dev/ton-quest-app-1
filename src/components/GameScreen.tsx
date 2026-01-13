import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { questions } from '@/data/questions';
import { hapticFeedback } from '@/lib/telegram';

interface GameScreenProps {
  onBack: () => void;
  userName: string;
  userId: number | null;
}

const GameScreen = ({ onBack, userName, userId }: GameScreenProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(1);
  const [timeLeft, setTimeLeft] = useState(20);
  const [gameOver, setGameOver] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const [hints, setHints] = useState(3);
  const [usedHint, setUsedHint] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (gameOver || selectedAnswer !== null) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeout();
          return 20;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameOver, selectedAnswer, currentQuestionIndex]);

  const handleTimeout = () => {
    if (lives > 0) {
      setLives(0);
      setGameOver(true);
    }
  };

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null || gameOver) return;

    setSelectedAnswer(answerIndex);
    const correct = answerIndex === currentQuestion.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      hapticFeedback.success();
      if (!answeredQuestions.has(currentQuestionIndex)) {
        const points = currentQuestion.difficulty === 'easy' ? 10 : currentQuestion.difficulty === 'medium' ? 20 : 30;
        setScore((prev) => prev + points);
        setAnsweredQuestions((prev) => new Set([...prev, currentQuestionIndex]));
      }

      setTimeout(() => {
        nextQuestion();
      }, 1500);
    } else {
      hapticFeedback.error();
      setLives(0);
      setTimeout(() => {
        setGameOver(true);
      }, 1500);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setTimeLeft(20);
    setUsedHint(false);
    
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * questions.length);
    } while (nextIndex === currentQuestionIndex);
    
    setCurrentQuestionIndex(nextIndex);
  };

  const watchAd = () => {
    try {
      // @ts-ignore - Monetag SDK
      if (window.show_10450158) {
        // @ts-ignore
        window.show_10450158();
        // После просмотра рекламы восстанавливаем жизнь
        setTimeout(() => {
          setLives(1);
          setGameOver(false);
          nextQuestion();
        }, 1000);
      } else {
        console.error('Monetag SDK не загружен');
        alert('Реклама временно недоступна. Попробуйте позже.');
      }
    } catch (error) {
      console.error('Ошибка при показе рекламы:', error);
      alert('Произошла ошибка при загрузке рекламы.');
    }
  };

  const watchAdForHint = () => {
    try {
      // @ts-ignore - Monetag SDK
      if (window.show_10450158) {
        // @ts-ignore
        window.show_10450158();
        // После просмотра рекламы добавляем подсказку
        setTimeout(() => {
          setHints((prev) => prev + 1);
          hapticFeedback.success();
        }, 1000);
      } else {
        console.error('Monetag SDK не загружен');
        alert('Реклама временно недоступна. Попробуйте позже.');
      }
    } catch (error) {
      console.error('Ошибка при показе рекламы:', error);
      alert('Произошла ошибка при загрузке рекламы.');
    }
  };

  const useHint = () => {
    if (hints <= 0 || usedHint || selectedAnswer !== null) return;
    
    setHints((prev) => prev - 1);
    setUsedHint(true);
    hapticFeedback.impact();
  };

  const restartGame = () => {
    setCurrentQuestionIndex(Math.floor(Math.random() * questions.length));
    setScore(0);
    setLives(1);
    setTimeLeft(20);
    setGameOver(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setAnsweredQuestions(new Set());
    setUsedHint(false);
  };

  if (gameOver) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-red-900/20 to-background">
        <Card className="w-full max-w-md p-8 bg-card/50 backdrop-blur-lg border-2 border-destructive/30 animate-scale-in">
          <div className="text-center space-y-6">
            <div className="text-6xl">💔</div>
            <h2 className="text-3xl font-bold">Game Over</h2>
            <div className="space-y-2">
              <p className="text-5xl font-black text-accent">{score}</p>
              <p className="text-muted-foreground">Твой результат</p>
            </div>
            <div className="space-y-3">
              <Button
                onClick={watchAd}
                size="lg"
                className="w-full bg-gradient-to-r from-accent to-yellow-500 hover:from-accent/90 hover:to-yellow-500/90 text-background font-bold"
              >
                <Icon name="Video" className="mr-2" size={20} />
                Посмотреть рекламу
              </Button>
              <Button
                onClick={restartGame}
                variant="outline"
                size="lg"
                className="w-full border-2"
              >
                <Icon name="RotateCcw" className="mr-2" size={20} />
                Новая игра
              </Button>
              <Button
                onClick={onBack}
                variant="ghost"
                size="lg"
                className="w-full"
              >
                В главное меню
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  const timeProgress = (timeLeft / 20) * 100;
  const getDifficultyColor = () => {
    switch (currentQuestion.difficulty) {
      case 'easy': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'hard': return 'text-red-400';
    }
  };

  return (
    <div className="min-h-screen flex flex-col p-4 pt-6 pb-24 bg-gradient-to-br from-background via-purple-900/20 to-background">
      <div className="w-full max-w-2xl mx-auto space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <Icon name="ArrowLeft" size={20} />
          </Button>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-accent/20 px-3 py-2 rounded-full">
              <Icon name="Coins" size={18} className="text-accent" />
              <span className="font-bold text-lg">{score}</span>
            </div>
            <div className="flex items-center gap-2 bg-destructive/20 px-3 py-2 rounded-full">
              <Icon name="Heart" size={18} className="text-destructive" />
              <span className="font-bold">{lives}</span>
            </div>
            <Button
              onClick={hints > 0 ? useHint : watchAdForHint}
              size="sm"
              disabled={usedHint && hints > 0}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-3 py-2 h-auto rounded-full"
            >
              <Icon name="Lightbulb" size={18} className="mr-1" />
              <span className="font-bold">{hints}</span>
            </Button>
          </div>
        </div>

        <Card className="p-6 bg-card/50 backdrop-blur-lg border-2 border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className={`text-sm font-bold ${getDifficultyColor()}`}>
                {currentQuestion.difficulty === 'easy' ? '⭐ Лёгкий' : currentQuestion.difficulty === 'medium' ? '⭐⭐ Средний' : '⭐⭐⭐ Сложный'}
              </span>
              <div className="flex items-center gap-2">
                <Icon name="Timer" size={20} className={timeLeft <= 5 ? 'text-destructive animate-pulse-ring' : 'text-muted-foreground'} />
                <span className={`text-xl font-bold ${timeLeft <= 5 ? 'text-destructive' : ''}`}>{timeLeft}с</span>
              </div>
            </div>
            <Progress value={timeProgress} className="h-2" />
          </div>
        </Card>

        <Card className="p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg border-2 border-primary/30 shadow-2xl">
          <h3 className="text-xl font-bold leading-relaxed mb-6">{currentQuestion.question}</h3>
          <div className="space-y-3">
            {currentQuestion.answers.map((answer, index) => {
              let buttonClass = "w-full justify-start text-left h-auto py-4 px-6 text-base transition-all hover:scale-[1.02]";
              
              const isWrongAnswer = usedHint && index !== currentQuestion.correctAnswer && index % 2 === 0;
              
              if (selectedAnswer === index) {
                if (isCorrect) {
                  buttonClass += " bg-green-500/20 border-2 border-green-500 hover:bg-green-500/20";
                } else {
                  buttonClass += " bg-red-500/20 border-2 border-red-500 hover:bg-red-500/20";
                }
              } else if (selectedAnswer !== null && index === currentQuestion.correctAnswer) {
                buttonClass += " bg-green-500/20 border-2 border-green-500";
              }
              
              if (isWrongAnswer && selectedAnswer === null) {
                buttonClass += " opacity-30";
              }

              return (
                <Button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null || isWrongAnswer}
                  variant="outline"
                  className={buttonClass}
                >
                  <span className="mr-3 font-bold text-primary">{String.fromCharCode(65 + index)}</span>
                  <span className="flex-1">{answer}</span>
                  {isWrongAnswer && <Icon name="Ban" size={20} className="text-muted-foreground" />}
                  {selectedAnswer === index && (
                    <Icon 
                      name={isCorrect ? "CheckCircle2" : "XCircle"} 
                      size={24} 
                      className={isCorrect ? "text-green-500" : "text-red-500"}
                    />
                  )}
                </Button>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default GameScreen;
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import GameScreen from '@/components/GameScreen';
import LeaderboardScreen from '@/components/LeaderboardScreen';
import ProfileScreen from '@/components/ProfileScreen';

type Screen = 'home' | 'game' | 'leaderboard' | 'profile';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [userName, setUserName] = useState<string>('Игрок');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'game':
        return <GameScreen onBack={() => setCurrentScreen('home')} userName={userName} />;
      case 'leaderboard':
        return <LeaderboardScreen onBack={() => setCurrentScreen('home')} />;
      case 'profile':
        return <ProfileScreen onBack={() => setCurrentScreen('home')} userName={userName} setUserName={setUserName} />;
      default:
        return (
          <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-background via-purple-900/20 to-background">
            <div className="w-full max-w-md space-y-8 animate-fade-in">
              <div className="text-center space-y-4">
                <div className="relative inline-block">
                  <h1 className="text-6xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                    TON QUIZ
                  </h1>
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-2xl -z-10 animate-pulse-ring" />
                </div>
                <p className="text-muted-foreground text-lg">
                  Проверь свои знания о TON блокчейне! 💎
                </p>
              </div>

              <Card className="p-8 bg-card/50 backdrop-blur-lg border-2 border-primary/20 shadow-2xl shadow-primary/10">
                <div className="space-y-4">
                  <Button
                    onClick={() => setCurrentScreen('game')}
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-lg font-bold h-14 shadow-lg shadow-primary/30 transition-all hover:scale-105"
                  >
                    <Icon name="Play" className="mr-2" size={24} />
                    Начать игру
                  </Button>

                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      onClick={() => setCurrentScreen('leaderboard')}
                      variant="outline"
                      size="lg"
                      className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all hover:scale-105"
                    >
                      <Icon name="Trophy" className="mr-2" size={20} />
                      Рейтинг
                    </Button>
                    <Button
                      onClick={() => setCurrentScreen('profile')}
                      variant="outline"
                      size="lg"
                      className="border-2 border-secondary/30 hover:bg-secondary/10 hover:border-secondary/50 transition-all hover:scale-105"
                    >
                      <Icon name="User" className="mr-2" size={20} />
                      Профиль
                    </Button>
                  </div>
                </div>
              </Card>

              <div className="bg-muted/30 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Icon name="Info" size={20} className="mt-0.5 text-accent flex-shrink-0" />
                  <div className="space-y-1">
                    <p>⏱️ 20 секунд на вопрос</p>
                    <p>❤️ 1 жизнь за игру</p>
                    <p>🎯 Вопросы от простых до сложных</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative">
      {renderScreen()}
      
      {currentScreen !== 'home' && (
        <div className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-lg border-t border-border/50 shadow-lg">
          <div className="flex justify-around items-center max-w-md mx-auto py-3 px-4">
            <Button
              variant={currentScreen === 'home' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setCurrentScreen('home')}
              className="flex-1 flex flex-col items-center gap-1 h-auto py-2"
            >
              <Icon name="Home" size={20} />
              <span className="text-xs">Главная</span>
            </Button>
            <Button
              variant={currentScreen === 'game' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setCurrentScreen('game')}
              className="flex-1 flex flex-col items-center gap-1 h-auto py-2"
            >
              <Icon name="Gamepad2" size={20} />
              <span className="text-xs">Игра</span>
            </Button>
            <Button
              variant={currentScreen === 'leaderboard' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setCurrentScreen('leaderboard')}
              className="flex-1 flex flex-col items-center gap-1 h-auto py-2"
            >
              <Icon name="Trophy" size={20} />
              <span className="text-xs">Рейтинг</span>
            </Button>
            <Button
              variant={currentScreen === 'profile' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setCurrentScreen('profile')}
              className="flex-1 flex flex-col items-center gap-1 h-auto py-2"
            >
              <Icon name="User" size={20} />
              <span className="text-xs">Профиль</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;

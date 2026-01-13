import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import GameScreen from '@/components/GameScreen';
import LeaderboardScreen from '@/components/LeaderboardScreen';
import ProfileScreen from '@/components/ProfileScreen';
import { getTelegramUser, initTelegramWebApp, isTelegramWebApp, hapticFeedback, getStartParam } from '@/lib/telegram';
import { getStoredStats, updateStats } from '@/lib/storage';

type Screen = 'home' | 'game' | 'leaderboard' | 'profile';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [userName, setUserName] = useState<string>('Игрок');
  const [userId, setUserId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initTelegramWebApp();
    
    const telegramUser = getTelegramUser();
    if (telegramUser) {
      setUserName(telegramUser.firstName + (telegramUser.lastName ? ` ${telegramUser.lastName}` : ''));
      setUserId(telegramUser.id);
      
      const startParam = getStartParam();
      if (startParam && startParam.startsWith('TON')) {
        const currentStats = getStoredStats(telegramUser.id);
        if (!currentStats.referredBy) {
          updateStats(telegramUser.id, { referredBy: startParam });
        }
      }
    }
    
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const handleScreenChange = (screen: Screen) => {
    hapticFeedback.light();
    setCurrentScreen(screen);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-purple-900/20 to-background">
        <div className="text-center space-y-4 animate-scale-in">
          <div className="text-6xl animate-pulse">💎</div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Загрузка TON Quiz...
          </h2>
        </div>
      </div>
    );
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'game':
        return <GameScreen onBack={() => handleScreenChange('home')} userName={userName} userId={userId} />;
      case 'leaderboard':
        return <LeaderboardScreen onBack={() => handleScreenChange('home')} userId={userId} userName={userName} />;
      case 'profile':
        return <ProfileScreen onBack={() => handleScreenChange('home')} userName={userName} setUserName={setUserName} userId={userId} />;
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

              {isTelegramWebApp() && (
                <Card className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl font-bold">
                      {userName.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold">{userName}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <Icon name="Check" size={12} className="text-green-400" />
                        Вход через Telegram
                      </div>
                    </div>
                  </div>
                </Card>
              )}

              <Card className="p-8 bg-card/50 backdrop-blur-lg border-2 border-primary/20 shadow-2xl shadow-primary/10">
                <div className="space-y-4">
                  <Button
                    onClick={() => handleScreenChange('game')}
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-lg font-bold h-14 shadow-lg shadow-primary/30 transition-all hover:scale-105"
                  >
                    <Icon name="Play" className="mr-2" size={24} />
                    Начать игру
                  </Button>

                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      onClick={() => handleScreenChange('leaderboard')}
                      variant="outline"
                      size="lg"
                      className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all hover:scale-105"
                    >
                      <Icon name="Trophy" className="mr-2" size={20} />
                      Рейтинг
                    </Button>
                    <Button
                      onClick={() => handleScreenChange('profile')}
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
                    <p>🎯 100 вопросов разной сложности</p>
                    <p>🏆 Соревнуйся с друзьями!</p>
                  </div>
                </div>
              </div>

              {!isTelegramWebApp() && (
                <Card className="p-4 bg-accent/10 border border-accent/20">
                  <div className="flex items-center gap-3 text-sm">
                    <Icon name="AlertTriangle" size={20} className="text-accent" />
                    <p className="text-muted-foreground">
                      Для полного функционала откройте приложение через Telegram Mini App
                    </p>
                  </div>
                </Card>
              )}
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
              onClick={() => handleScreenChange('home')}
              className="flex-1 flex flex-col items-center gap-1 h-auto py-2"
            >
              <Icon name="Home" size={20} />
              <span className="text-xs">Главная</span>
            </Button>
            <Button
              variant={currentScreen === 'game' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => handleScreenChange('game')}
              className="flex-1 flex flex-col items-center gap-1 h-auto py-2"
            >
              <Icon name="Gamepad2" size={20} />
              <span className="text-xs">Игра</span>
            </Button>
            <Button
              variant={currentScreen === 'leaderboard' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => handleScreenChange('leaderboard')}
              className="flex-1 flex flex-col items-center gap-1 h-auto py-2"
            >
              <Icon name="Trophy" size={20} />
              <span className="text-xs">Рейтинг</span>
            </Button>
            <Button
              variant={currentScreen === 'profile' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => handleScreenChange('profile')}
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
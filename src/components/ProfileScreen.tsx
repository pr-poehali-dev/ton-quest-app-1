import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface ProfileScreenProps {
  onBack: () => void;
  userName: string;
  setUserName: (name: string) => void;
}

const ProfileScreen = ({ onBack, userName, setUserName }: ProfileScreenProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(userName);

  const stats = [
    { label: 'Всего игр', value: '42', icon: 'Gamepad2', color: 'text-primary' },
    { label: 'Правильных ответов', value: '156', icon: 'CheckCircle2', color: 'text-green-400' },
    { label: 'Лучший результат', value: '420', icon: 'Trophy', color: 'text-accent' },
    { label: 'Уровень', value: '12', icon: 'Star', color: 'text-secondary' },
  ];

  const achievements = [
    { id: 1, title: 'Новичок', description: 'Ответил на 10 вопросов', icon: '🌱', unlocked: true },
    { id: 2, title: 'TON Энтузиаст', description: 'Ответил на 50 вопросов', icon: '💎', unlocked: true },
    { id: 3, title: 'Знаток блокчейна', description: 'Ответил на 100 вопросов', icon: '🏆', unlocked: true },
    { id: 4, title: 'Дуров одобряет', description: 'Набрал 500+ очков за игру', icon: '✈️', unlocked: false },
    { id: 5, title: 'Криптомастер', description: 'Ответил на 200 вопросов', icon: '👑', unlocked: false },
    { id: 6, title: 'Легенда TON', description: 'Набрал 1000+ очков за игру', icon: '⚡', unlocked: false },
  ];

  const handleSaveName = () => {
    if (tempName.trim()) {
      setUserName(tempName.trim());
      setIsEditing(false);
    }
  };

  return (
    <div className="min-h-screen p-4 pt-6 pb-24 bg-gradient-to-br from-background via-purple-900/20 to-background">
      <div className="w-full max-w-2xl mx-auto space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            👤 Профиль
          </h2>
          <Button variant="ghost" size="sm" onClick={onBack}>
            <Icon name="X" size={20} />
          </Button>
        </div>

        <Card className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg border-2 border-primary/30">
          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-5xl font-bold shadow-2xl shadow-primary/30 animate-pulse-ring">
              😎
            </div>
            
            {isEditing ? (
              <div className="flex gap-2 w-full max-w-xs">
                <Input
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  placeholder="Введи своё имя"
                  className="text-center"
                  maxLength={20}
                />
                <Button onClick={handleSaveName} size="sm">
                  <Icon name="Check" size={16} />
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold">{userName}</h3>
                <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)}>
                  <Icon name="Edit" size={16} />
                </Button>
              </div>
            )}
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon name="Hash" size={14} />
              <span>Telegram ID: 123456789</span>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4 bg-card/50 backdrop-blur-lg hover:bg-card/70 transition-all hover:scale-105">
              <div className="flex items-center gap-3">
                <div className={`${stat.color}`}>
                  <Icon name={stat.icon as any} size={24} />
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Icon name="Award" size={20} className="text-accent" />
            Достижения
          </h3>
          <div className="space-y-2">
            {achievements.map((achievement) => (
              <Card
                key={achievement.id}
                className={`p-4 ${
                  achievement.unlocked
                    ? 'bg-card/50 backdrop-blur-lg border-accent/20'
                    : 'bg-card/20 backdrop-blur-sm opacity-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <div className="font-bold flex items-center gap-2">
                      {achievement.title}
                      {achievement.unlocked && (
                        <Icon name="CheckCircle2" size={16} className="text-green-400" />
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.description}
                    </div>
                  </div>
                  {!achievement.unlocked && (
                    <Icon name="Lock" size={20} className="text-muted-foreground" />
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-6 bg-gradient-to-br from-accent/10 to-yellow-500/10 border-2 border-accent/20">
          <div className="flex items-center gap-4">
            <Icon name="Gift" size={32} className="text-accent" />
            <div className="flex-1">
              <h3 className="font-bold text-lg">Обменяй очки на награды!</h3>
              <p className="text-sm text-muted-foreground">
                Копи баллы и получай промокоды и бонусы
              </p>
            </div>
            <Button className="bg-gradient-to-r from-accent to-yellow-500 text-background font-bold">
              <Icon name="ArrowRight" size={16} />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfileScreen;

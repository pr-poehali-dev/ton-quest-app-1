import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';
import { getStoredStats, updateStats, generateReferralCode, getReferralLink } from '@/lib/storage';
import { useToast } from '@/hooks/use-toast';

interface ProfileScreenProps {
  onBack: () => void;
  userName: string;
  setUserName: (name: string) => void;
  userId: number | null;
}

const ProfileScreen = ({ onBack, userName, setUserName, userId }: ProfileScreenProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(userName);
  const { toast } = useToast();
  const [stats, setStats] = useState(getStoredStats(userId));

  useEffect(() => {
    const currentStats = getStoredStats(userId);
    if (userId && !currentStats.referralCode) {
      const newCode = generateReferralCode(userId);
      updateStats(userId, { referralCode: newCode });
      setStats(getStoredStats(userId));
    } else {
      setStats(currentStats);
    }
  }, [userId]);

  const statsData = [
    { label: 'Всего игр', value: stats.totalGames.toString(), icon: 'Gamepad2', color: 'text-primary' },
    { label: 'Правильных ответов', value: stats.totalCorrectAnswers.toString(), icon: 'CheckCircle2', color: 'text-green-400' },
    { label: 'Лучший результат', value: stats.bestScore.toString(), icon: 'Trophy', color: 'text-accent' },
    { label: 'Уровень', value: stats.level.toString(), icon: 'Star', color: 'text-secondary' },
  ];

  const achievements = [
    { id: 'newcomer', title: 'Новичок', description: 'Ответил на 10 вопросов', icon: '🌱', unlocked: stats.achievements.includes('newcomer') },
    { id: 'enthusiast', title: 'TON Энтузиаст', description: 'Ответил на 50 вопросов', icon: '💎', unlocked: stats.achievements.includes('enthusiast') },
    { id: 'expert', title: 'Знаток блокчейна', description: 'Ответил на 100 вопросов', icon: '🏆', unlocked: stats.achievements.includes('expert') },
    { id: 'durov', title: 'Дуров одобряет', description: 'Набрал 500+ очков за игру', icon: '✈️', unlocked: stats.achievements.includes('durov') },
    { id: 'master', title: 'Криптомастер', description: 'Ответил на 200 вопросов', icon: '👑', unlocked: stats.achievements.includes('master') },
    { id: 'legend', title: 'Легенда TON', description: 'Набрал 1000+ очков за игру', icon: '⚡', unlocked: stats.achievements.includes('legend') },
  ];

  const copyReferralLink = () => {
    if (stats.referralCode) {
      const link = getReferralLink(stats.referralCode);
      navigator.clipboard.writeText(link);
      toast({
        title: 'Скопировано!',
        description: 'Реферальная ссылка скопирована в буфер обмена',
      });
    }
  };

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
            
            {userId && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Hash" size={14} />
                <span>Telegram ID: {userId}</span>
              </div>
            )}
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-3">
          {statsData.map((stat, index) => (
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

        <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-500/20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Icon name="Users" size={24} className="text-blue-400" />
              <div className="flex-1">
                <h3 className="font-bold text-lg">Реферальная система</h3>
                <p className="text-sm text-muted-foreground">
                  Приглашай друзей и получай 5% от их очков!
                </p>
              </div>
            </div>
            
            {stats.referralCode && (
              <>
                <div className="flex gap-2">
                  <Input
                    value={getReferralLink(stats.referralCode)}
                    readOnly
                    className="text-xs"
                  />
                  <Button onClick={copyReferralLink} size="sm">
                    <Icon name="Copy" size={16} />
                  </Button>
                </div>
                
                {stats.referralEarnings > 0 && (
                  <div className="flex items-center gap-2 p-3 bg-green-500/10 rounded-lg">
                    <Icon name="TrendingUp" size={20} className="text-green-400" />
                    <div className="flex-1">
                      <div className="text-sm font-bold">Заработано с рефералов</div>
                      <div className="text-2xl font-black text-green-400">+{stats.referralEarnings}</div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-accent/10 to-yellow-500/10 border-2 border-accent/20">
          <div className="flex items-center gap-4">
            <Icon name="Coins" size={32} className="text-accent" />
            <div className="flex-1">
              <h3 className="font-bold text-lg">Всего очков</h3>
              <p className="text-3xl font-black text-accent">{stats.totalScore}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfileScreen;
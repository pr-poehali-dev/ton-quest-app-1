import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';
import { getLeaderboard, getUserRank, getStoredStats } from '@/lib/storage';
import type { LeaderboardEntry } from '@/lib/storage';

interface LeaderboardScreenProps {
  onBack: () => void;
  userId: number | null;
  userName: string;
}

const LeaderboardScreen = ({ onBack, userId, userName }: LeaderboardScreenProps) => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [userRank, setUserRank] = useState<number | null>(null);
  const [userStats, setUserStats] = useState(getStoredStats(userId));

  useEffect(() => {
    const entries = getLeaderboard();
    setLeaderboard(entries);
    
    if (userId) {
      const rank = getUserRank(userId);
      setUserRank(rank);
      setUserStats(getStoredStats(userId));
    }
  }, [userId]);

  const leaderboardData = leaderboard.map((entry, index) => ({
    rank: index + 1,
    name: entry.name,
    score: entry.totalScore,
    avatar: entry.avatar,
    isCurrentUser: entry.userId === userId,
  }));

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'from-yellow-400 to-amber-600';
      case 2: return 'from-gray-300 to-gray-500';
      case 3: return 'from-orange-400 to-orange-600';
      default: return 'from-primary to-secondary';
    }
  };

  const getRankSize = (rank: number) => {
    if (rank <= 3) return 'text-2xl';
    return 'text-xl';
  };

  return (
    <div className="min-h-screen p-4 pt-6 pb-24 bg-gradient-to-br from-background via-purple-900/20 to-background">
      <div className="w-full max-w-2xl mx-auto space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            🏆 Рейтинг
          </h2>
          <Button variant="ghost" size="sm" onClick={onBack}>
            <Icon name="X" size={20} />
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {leaderboardData.slice(0, 3).map((player) => (
            <Card
              key={player.rank}
              className={`relative overflow-hidden ${
                player.rank === 1 ? 'col-span-3' : 'col-span-3 sm:col-span-1'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${getRankColor(player.rank)} opacity-10`} />
              <div className="relative p-4 text-center space-y-2">
                <div className={getRankSize(player.rank)}>{player.avatar}</div>
                <div className={`font-black ${getRankSize(player.rank)}`}>#{player.rank}</div>
                <div className="font-bold truncate">{player.name}</div>
                <div className="text-accent font-bold flex items-center justify-center gap-1">
                  <Icon name="Coins" size={16} />
                  {player.score}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-2">
          {leaderboardData.slice(3).map((player, index) => (
            <Card
              key={player.rank}
              className="p-4 bg-card/50 backdrop-blur-lg hover:bg-card/70 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl font-bold">
                  {player.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-muted-foreground">#{player.rank}</span>
                    <span className="font-bold truncate">{player.name}</span>
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <Icon name="Coins" size={14} className="text-accent" />
                    {player.score} очков
                  </div>
                </div>
                <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
              </div>
            </Card>
          ))}
        </div>

        {userId && userStats.totalScore > 0 && (
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold">
                😎
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  {userRank && <span className="font-bold text-muted-foreground">#{userRank}</span>}
                  <span className="font-bold">{userRank ? 'Твоя позиция' : 'Сыграй чтобы попасть в рейтинг'}</span>
                </div>
                <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  <Icon name="Coins" size={14} className="text-accent" />
                  {userStats.totalScore} очков
                </div>
              </div>
              <Button size="sm" className="bg-gradient-to-r from-primary to-secondary" onClick={onBack}>
                <Icon name="TrendingUp" size={16} className="mr-1" />
                Играть
              </Button>
            </div>
          </Card>
        )}

        {leaderboard.length === 0 && (
          <Card className="p-8 text-center">
            <Icon name="Users" size={48} className="mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-bold mb-2">Рейтинг пуст</h3>
            <p className="text-muted-foreground">Стань первым в таблице лидеров!</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default LeaderboardScreen;
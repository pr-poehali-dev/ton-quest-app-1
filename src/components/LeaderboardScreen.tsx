import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface LeaderboardScreenProps {
  onBack: () => void;
  userId: number | null;
}

const LeaderboardScreen = ({ onBack, userId }: LeaderboardScreenProps) => {
  const leaderboardData = [
    { rank: 1, name: 'CryptoMaster', score: 2580, avatar: '👑' },
    { rank: 2, name: 'TON Expert', score: 2340, avatar: '🏆' },
    { rank: 3, name: 'BlockchainPro', score: 2120, avatar: '🥉' },
    { rank: 4, name: 'TON Developer', score: 1890, avatar: '💎' },
    { rank: 5, name: 'Web3 Guru', score: 1650, avatar: '⚡' },
    { rank: 6, name: 'Smart Contract Dev', score: 1420, avatar: '🚀' },
    { rank: 7, name: 'Durov Fan', score: 1280, avatar: '✈️' },
    { rank: 8, name: 'TON Validator', score: 1100, avatar: '🔥' },
    { rank: 9, name: 'Crypto Ninja', score: 980, avatar: '🥷' },
    { rank: 10, name: 'TON Newbie', score: 850, avatar: '🌟' },
  ];

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

        <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold">
              😎
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-muted-foreground">#156</span>
                <span className="font-bold">Твоя позиция</span>
              </div>
              <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                <Icon name="Coins" size={14} className="text-accent" />
                420 очков
              </div>
            </div>
            <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
              <Icon name="TrendingUp" size={16} className="mr-1" />
              Улучшить
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LeaderboardScreen;
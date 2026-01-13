interface GameStats {
  totalGames: number;
  totalCorrectAnswers: number;
  bestScore: number;
  level: number;
  totalScore: number;
  achievements: string[];
  referralCode: string;
  referredBy: string | null;
  referralEarnings: number;
}

const STORAGE_KEY = 'ton-quiz-data';

export const getStoredStats = (userId: number | null): GameStats => {
  if (!userId) {
    return getDefaultStats();
  }

  const stored = localStorage.getItem(`${STORAGE_KEY}-${userId}`);
  if (!stored) {
    return getDefaultStats();
  }

  try {
    return JSON.parse(stored);
  } catch {
    return getDefaultStats();
  }
};

export const saveStats = (userId: number | null, stats: GameStats): void => {
  if (!userId) return;
  localStorage.setItem(`${STORAGE_KEY}-${userId}`, JSON.stringify(stats));
};

export const updateStats = (
  userId: number | null,
  updates: Partial<GameStats>
): GameStats => {
  const current = getStoredStats(userId);
  const updated = { ...current, ...updates };
  saveStats(userId, updated);
  return updated;
};

const getDefaultStats = (): GameStats => ({
  totalGames: 0,
  totalCorrectAnswers: 0,
  bestScore: 0,
  level: 1,
  totalScore: 0,
  achievements: [],
  referralCode: '',
  referredBy: null,
  referralEarnings: 0,
});

export const generateReferralCode = (userId: number): string => {
  return `TON${userId}${Date.now().toString(36).toUpperCase()}`;
};

export const getReferralLink = (referralCode: string): string => {
  const botUsername = 'YourBotUsername';
  return `https://t.me/${botUsername}?start=${referralCode}`;
};

export const processReferralBonus = (
  userId: number | null,
  points: number
): number => {
  if (!userId) return 0;

  const stats = getStoredStats(userId);
  if (!stats.referredBy) return 0;

  const bonus = Math.floor(points * 0.05);
  
  const referrerIdMatch = stats.referredBy.match(/TON(\d+)/);
  if (referrerIdMatch) {
    const referrerId = parseInt(referrerIdMatch[1]);
    const referrerStats = getStoredStats(referrerId);
    updateStats(referrerId, {
      totalScore: referrerStats.totalScore + bonus,
      referralEarnings: referrerStats.referralEarnings + bonus,
    });
  }

  return bonus;
};

export const checkAchievements = (stats: GameStats): string[] => {
  const newAchievements: string[] = [];

  if (stats.totalCorrectAnswers >= 10 && !stats.achievements.includes('newcomer')) {
    newAchievements.push('newcomer');
  }
  if (stats.totalCorrectAnswers >= 50 && !stats.achievements.includes('enthusiast')) {
    newAchievements.push('enthusiast');
  }
  if (stats.totalCorrectAnswers >= 100 && !stats.achievements.includes('expert')) {
    newAchievements.push('expert');
  }
  if (stats.bestScore >= 500 && !stats.achievements.includes('durov')) {
    newAchievements.push('durov');
  }
  if (stats.totalCorrectAnswers >= 200 && !stats.achievements.includes('master')) {
    newAchievements.push('master');
  }
  if (stats.bestScore >= 1000 && !stats.achievements.includes('legend')) {
    newAchievements.push('legend');
  }

  return newAchievements;
};

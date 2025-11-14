export type StudyStreak = {
  days: number;
  longestStreak: number;
  lastStudyDay: string; // Date in format YYYY-MM-DD
  lastStudyTimezone: string;
};

export const defaultStudyStreak: StudyStreak = {
  days: 0,
  longestStreak: 0,
  lastStudyDay: '0000-01-01',
  lastStudyTimezone: 'Asia/Jerusalem',
};

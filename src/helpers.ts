export default {
  getDaysFromMilliseconds(ms: number): number {
    return Math.floor(ms / (1000 * 60 * 60 * 24));
  },
  getHoursFromMilliseconds(ms: number): number {
    return Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  },
  getMinutesFromMilliseconds(ms: number): number {
    return Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  },
  getSecondsFromMilliseconds(ms: number): number {
    return Math.floor((ms % (1000 * 60)) / 1000);
  }
};

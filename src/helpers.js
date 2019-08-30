export default {
  getDaysFromMilliseconds(ms) {
    return Math.floor(ms / (1000 * 60 * 60 * 24));
  },
  getHoursFromMilliseconds(ms) {
    return Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  },
  getMinutesFromMilliseconds(ms) {
    return Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  },
  getSecondsFromMilliseconds(ms) {
    return Math.floor((ms % (1000 * 60)) / 1000);
  }
};

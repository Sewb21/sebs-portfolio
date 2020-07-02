const getDateString = (date) => {
  const hour = date.getHours()

  if(hour >= 19) {
    return 'Good Evening!';
  }

  if(hour >= 12) {
    return 'Good Afternoon!';
  };

  if (hour >= 5) {
    return 'Good Morning!'
  }

  if(hour >= 0) {
    return 'You should probably be asleep'
  }
};

module.exports = getDateString
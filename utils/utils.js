const getDateString = (date) => {
  const hour = date.getHours()
  const minutes = date.getMinutes()

  if(hour <= 12 && minutes < 0) {
    return 'Good Morning!'
  }

};

module.exports = getDateString
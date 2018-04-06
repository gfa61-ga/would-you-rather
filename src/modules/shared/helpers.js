export const conciseDateTime = date => {
  const options = {
    day: 'numeric',
    hour: 'numeric',
    hour12: false,
    minute: 'numeric',
    month: 'numeric',
    second: 'numeric',
    year: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

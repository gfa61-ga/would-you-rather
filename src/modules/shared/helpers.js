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

export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

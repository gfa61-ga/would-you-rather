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

// for some reason setting a `basename` on customHistory results in
// duplicate basename paths (`/would-you-rather/would-you-rather`) on Github pages :(
export const makeUrl = path => {
  return `${process.env.PUBLIC_URL}/${stripInitialSlash(path)}`;
};

const stripInitialSlash = string => string.charAt(0) === '/' ? string.slice(1) : string;

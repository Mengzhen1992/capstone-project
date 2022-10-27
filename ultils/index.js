export function generateID() {
  return Math.random().toString(36).substring(2);
}

/**
 * Get current date, e.g. 2022.10.27 Wednesday
 * @returns a string to display current date.
 */
export function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dates = date.getDate();
  const arr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = date.getDay();
  return year + "." + month + "." + dates + " " + arr[day];
}

/**
 *
 * @returns a string with time format 20:10:36
 */
export function displayTime(seconds) {
  let { hour, min, sec } = formatTime(seconds);

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (sec < 10) {
    sec = "0" + sec;
  }

  return `${hour}:${min}:${sec}`;
}

/**
 * convert seconds to an object with the key hour, min, seconds
 * @param {*} seconds
 * @returns an object with hour, min, seconds.
 */
function formatTime(seconds) {
  const sec = seconds % 60;

  const minutes = Math.floor(seconds / 60);

  const hour = Math.floor(minutes / 60);
  const min = minutes % 60;

  return {
    hour: hour,
    min: min,
    sec: sec,
  };
}

export function displayDuration(seconds) {
  const { hour, min } = formatTime(seconds);
  if (hour === 0 && min === 0) {
    return "0min";
  } else if (hour === 0) {
    return `${min}min`;
  } else if (min === 0) {
    return `${hour}h`;
  } else return `${hour}h${min}min`;
}

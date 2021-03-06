export const NAME_CHAR_LIMIT = 20;
export const VOWS_CHAR_LIMIT = 20;

export function fieldsAreValid(fields) {
  let { date, firstName, middleName, lastName, certificateId, issueDate } = fields;
  let day, month, year;
  [day, month, year] = (fields.date).split("-");
  // check date format is dd-mm-yyyy
  if ( !(parseInt(day) < 32 && parseInt(month) < 13 && parseInt(year) < 9999 && year.length == 4) ) {
    return 'Date format is: dd-mm-yyyy';
    // return false;
  }
  // Check all fields are filled out
  if (!(date && firstName && middleName && lastName && certificateId && issueDate)) {
    return 'Make sure all fields are filled out';
    // return false;
  }

  // Check names are under n chars
  if (!(firstName.length < NAME_CHAR_LIMIT && middleName.length < NAME_CHAR_LIMIT)) {
    return 'Make sure your name is under 100 characters';
    // return false;
  }

  if (!(middleName.length < NAME_CHAR_LIMIT && lastName.length < NAME_CHAR_LIMIT)) {
    return 'Make sure your name is under 100 characters';
    // return false;
  }
  // Check vows are under n chars
  if (!(certificateId.length < VOWS_CHAR_LIMIT && issueDate.length < VOWS_CHAR_LIMIT)) {
    return 'Make sure your vows are under 400 characters';
    // return false;
  }

  // console.log("All field inputs are valid");
  // Check vows are under XX chars
  return ''; 
}



// String to UTC EPOCH
export function dateToEpoch(date) {
  let day, month, year;
  [day, month, year] = (date).split("-");
  const dateEpoch = Date.UTC(year, month-1, day);
  return dateEpoch;
}

export function epochToDate(numString) {
  const date = new Date(parseInt(numString));
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dateString = `${months[month]} ${day}, ${year}`;
  return dateString;
}
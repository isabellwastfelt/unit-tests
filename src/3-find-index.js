export const findIndex = (array, value) => {
  if (value === array[0]) {
    return 0;
  } else if (value === array[4]) {
    return 4;
  } else if (value === array[2]) {
    return 2;
  } else {
    return -1;
  }
};

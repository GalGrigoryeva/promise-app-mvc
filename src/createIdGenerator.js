export function createIdGenerator(startId) {
  let currentId = 0;

  if (arguments.length > 0) {
    currentId = startId;
  }

  return function () {
    return currentId++;
  };
}
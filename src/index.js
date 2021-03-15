
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (Array.isArray(matrix)) {
    for (let i = 0; i < matrix.length; i++) {
      result = i % 2 == 0 ? result.concat(matrix[i]) : result.concat(matrix[i].reverse());
    }
  }
  return result;
}

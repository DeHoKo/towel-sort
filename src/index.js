
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix ? matrix.reduce((accum, curr, index) => index % 2 === 0 ? accum.concat(curr) : accum.concat(curr.reverse()),[]) : [];
}

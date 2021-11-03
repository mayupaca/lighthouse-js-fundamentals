let calculateRectangleArea = function (length, width) {
  if (length > 0 && width > 0) {
    let rectangleArea = length * width;
    return rectangleArea;
  }
}

let calculateTriangleArea = function (base, height) {
  if (base > 0 && height > 0) {
    let triangleArea = base * height / 2;
    return triangleArea;
  }
}

let calculateCircleArea = function (radius) {
  if (radius > 0) {
    let circleArea = Math.PI * radius * radius;
    return circleArea;
  }
}

console.log(calculateCircleArea(10));
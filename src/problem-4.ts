{
  //
  // Problem 04 Soluton:-

  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  const calculateShapeArea = (shape: Circle | Rectangle): number => {
    if (shape.shape === "circle") {
      return Math.PI * Math.pow(shape.radius, 2);
    } else {
      return shape.width * shape.height;
    }
  };

  const circleArea = calculateShapeArea({ shape: "circle", radius: 4 });
  // console.log(circleArea);

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 8,
    height: 6,
  });
  // console.log(rectangleArea);

  //
}

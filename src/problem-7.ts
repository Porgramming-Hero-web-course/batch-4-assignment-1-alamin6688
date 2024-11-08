{
  //
  // Problem 07 Soluton:-

  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    getCarAge(currentYear: number = new Date().getFullYear()) {
      const carsAge = currentYear - this.year;
      return console.log(
        carsAge,
        `(assuming current year is`,
        currentYear,
        `)`
      );
    }
  }

  const car = new Car("BMW", "M8 Competition", 2016);
  car.getCarAge();
  
  // const Output = car.getCarAge();
  // console.log(Output);

  //
}

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

    getCarAge(): number {
      const currentYear = new Date().getFullYear();
      return currentYear - this.year;
    }
  }

  const car = new Car("BMW", "M8 Competition", 2016);

  const Output = car.getCarAge();
  // console.log(Output);

  //
}

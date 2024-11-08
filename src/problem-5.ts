{
  //
  // Problem 05 Soluton:-

  type Person = {
    name: string;
    age: number;
  };

  const person: Person = {
    name: "Alamin",
    age: 30,
  };

  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  const Output = getProperty(person, "name");
  // console.log(Output);
  //
}

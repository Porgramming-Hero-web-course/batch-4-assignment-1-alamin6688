{
  //
  // Problem 08 Soluton:-

  function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every((key) => key in obj);
  }

  const person = { name: "Alice", age: 28, email: "alice@example.com" };

  const Output1 = validateKeys(person, ["name", "age"]);
  // console.log(Output1);

  // Checking false when key is not given in object(test purpus)
  // const Output2 = validateKeys(person, ["name", "address"]);
  // console.log(Output2);
  //
}

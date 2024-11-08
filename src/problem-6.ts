{
  //
  // Problem 06 Soluton:-

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };

  const updateProfile = <T>(obj: T, updates: Partial<T>): T => {
    return { ...obj, ...updates };
  };

  const Output = updateProfile(myProfile, { email: "alamin@gmail.com" });
  // console.log(Output);
  //
}

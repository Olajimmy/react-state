function Dogs() {
  const dogs = [
    { name: "Sparky", age: 3 },
    { name: "Spot", age: 3 },
    { name: "Ralph", age: 3 },
    { name: "Fido", age: 3 },
  ];

  const dogsJSX = dogs.map((dog) => {
    return (
      <div>
        <h1>{dog.name}</h1>
        <h2>{dog.age}</h2>
      </div>
    );
  });
  console.log(dogsJSX);
  return <div>{dogsJSX}s</div>;
}
export default Dogs;

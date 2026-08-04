export default function MyFirstComponent() {
  // Reusable Component
  let s = "Welcome to my React App!"; // { } --> JacaScript Expression
  let a = 10;
  let b = 20;

  const person = {
    name: "John",
    age: 30,
    city: "New York",
  };
  return (
    <div>
      <h3>{s}Hello, this is my first React component!</h3>
      <h2>{s}</h2>
      <h2> the first number is {a}</h2>
      <h2>the second number is {b}</h2>
      <h2>the sum is {a + b}</h2>
      <p>{s}This is a simple React component.</p>
      <button> {s}Click Me</button>
      <h2>
        {" "}
        {person.name} is {person.age} years old and lives in {person.city}.{" "}
      </h2>
    </div>
  );
}

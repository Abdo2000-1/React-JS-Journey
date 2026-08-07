import "./MyFirstComponent.css";

export default function MyFirstComponent() {
  // Reusable Component
  const person = {
    name: "Abdo",
    age: 25,
    city: "Cairo",
  };

  return (
    // Adding Class to The HTML in JSX
    <h1 className={person.name === "Abdo Al Adawy" ? "Myname" : "Yourname"}>
      {" "}
      Abdo Al Adawy{" "}
    </h1>
  );
}

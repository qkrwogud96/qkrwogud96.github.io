import Custom from "./Custom";
const pageName = [
  {
    name: "hong",
    age: "26",
  },
  {
    name: "kim",
    age: "21",
  },
  {
    name: "park",
    age: "51",
  },
];
function App() {
  return (
    <>
      <h1>Hello World</h1>
      {pageName.map((obj) => (
        <Custom name={obj.name} age={obj.age}></Custom>
      ))}
    </>
  );
}

export default App;

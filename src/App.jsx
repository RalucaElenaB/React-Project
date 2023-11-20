import Sidebar from "./components/Sidebar/Sidebar";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";

function App() {
  return (
    <main>
      <Sidebar />
      <Card />
      <Button label="Add Tutor" />
    </main>
  );
}

export default App;

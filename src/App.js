import { Input } from "./Input";

const App = () => {
  return (
    <div className="App">
      <Input
        htmlFor="input"
        id="input"
        label="Название"
        name="input"
        value=""
      />
    
    </div>
  );
}

export default App;
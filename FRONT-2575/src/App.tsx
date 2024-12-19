import "./App.css";
import { CounterList } from "./CounterList";
import {ThemeSwitcher} from "./ThemeSwitcher";
import {InputForm} from "./InputForm";

function App() {
  return (
    <>
      <CounterList />
      <ThemeSwitcher/>
      <InputForm/>
    </>
  );
}

export default App;

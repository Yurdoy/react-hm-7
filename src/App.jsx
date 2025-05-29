import "./App.css";
import { LanguageProvider } from "./context/CurrentLanguage";
import SwitchLanguage from "./components/SwitchLanguage";
import SomeText from "./components/SomeText";

function App() {
  return (
    <>
      <LanguageProvider>
        <SwitchLanguage />
        <SomeText />
      </LanguageProvider>
    </>
  );
}

export default App;

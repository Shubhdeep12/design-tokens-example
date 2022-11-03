import ProfileCard from "./components/ProfileCard";
import { ThemeProvider } from "./containers/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ProfileCard />
      </ThemeProvider>
      
    </div>
  );
}

export default App;

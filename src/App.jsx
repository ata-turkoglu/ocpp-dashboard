import "./App.css";
import Header from "./components/Header";
import { AppProvider } from "./contexts/AppContext";
import { WsProvider } from "./contexts/WsContext";
import ChargerDashboard from "./Views/ChargerDashboard";

function App() {
    return (
        <AppProvider>
            <WsProvider>
                <div className="bg-slate-100 h-screen w-full flex flex-col">
                    <Header />
                    <ChargerDashboard />
                </div>
            </WsProvider>
        </AppProvider>
    );
}

export default App;

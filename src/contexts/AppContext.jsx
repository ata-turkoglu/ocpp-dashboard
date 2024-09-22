import {
    createContext,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3333";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [chargers, setChargers] = useState([]);
    const [onlineChargers, setOnlineChargers] = useState([]);
    const chargerList = useRef();

    async function getChargers() {
        try {
            const { data } = await axios.get("/chargers");
            console.log("get-chargers", data);
            setChargers(data);
            chargerList.current = data;
        } catch (error) {
            return { error: true };
        }
    }

    function setChargerOnline(charger_code) {
        const found = chargerList.current.find(
            (charger) => charger.charger_code == charger_code
        );
        found.online = true;

        setChargers(Array.of(...chargerList.current));
    }

    function setChargerOffline(charger_code) {
        const found = chargerList.current.find(
            (charger) => charger.charger_code == charger_code
        );
        found.online = false;

        setChargers(Array.of(...chargerList.current));
    }

    function setChargerStatus(charger_code, data) {
        const found = chargerList.current.find(
            (charger) => charger.charger_code == charger_code
        );

        if (!found.connectors) found.connectors = {};

        found.connectors[data.connector_id] = data;

        setChargers(Array.of(...chargerList.current));
    }

    useLayoutEffect(() => {
        getChargers();
    }, []);

    useEffect(() => {
        console.log("----", chargers);
    }, [chargers]);
    return (
        <AppContext.Provider
            value={{
                chargers,
                setChargers,
                setChargerOnline,
                setChargerOffline,
                setChargerStatus,
                onlineChargers,
                setOnlineChargers,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

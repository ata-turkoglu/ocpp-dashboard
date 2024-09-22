import {
    createContext,
    useContext,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import { AppContext } from "../contexts/AppContext";

export const WsContext = createContext();

export const WsProvider = ({ children }) => {
    const { chargers, setChargerOnline, setChargerOffline, setChargerStatus } =
        useContext(AppContext);

    var socket = useRef();

    useLayoutEffect(() => {
        const ws = new WebSocket("ws://localhost:3333/dashboard=true");
        socket.current = ws;

        ws.onopen = function () {
            console.log("connected");
        };

        ws.onclose = function () {};

        ws.onmessage = function (message) {
            ReceivedMessageHandler(ws, message.data);
        };
    }, []);

    const ReceivedMessageHandler = (socket, message) => {
        console.log("message", JSON.parse(message.toString()));
        const { messageType, charger_code, data } = JSON.parse(
            message.toString()
        );

        switch (messageType) {
            case "online":
                return online(charger_code);
            case "offline":
                return offline(charger_code);
            case "statusUpdate":
                return statusUpdate(charger_code, data);
            case "MeterValues":
                return meterValuesResp(socket, uniqueId, payload, charger);
            case "StopTransaction":
                return stopTransactionResp(socket, uniqueId, payload, charger);
            case "Heartbeat":
                return heartbeatResp(socket, uniqueId, payload, charger);
            default:
                break;
        }
    };

    const online = (charger_code) => {
        setChargerOnline(charger_code);
    };
    const offline = (charger_code) => {
        setChargerOffline(charger_code);
    };
    const statusUpdate = (charger_code, data) => {
        setChargerStatus(charger_code, data);
    };

    return <WsContext.Provider value={{}}>{children}</WsContext.Provider>;
};

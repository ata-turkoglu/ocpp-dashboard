import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import ConnectorView from "./ConnectorView";

export default function Connectors({ selectedChargerId }) {
    const { chargers } = useContext(AppContext);
    const [charger, setCharger] = useState(null);
    useLayoutEffect(() => {
        const found = chargers.find(
            (chr) => chr.charger_id == selectedChargerId
        );
        setCharger(Object.assign({}, found));
    }, [chargers, selectedChargerId]);

    return (
        <div
            id="connectors"
            className="bg-white shadow-sm w-1/2 flex border ml-3"
        >
            {charger?.connectors &&
                Object.keys(charger.connectors).map((conn) => (
                    <ConnectorView
                        key={conn}
                        charger={charger}
                        connectorId={conn}
                    />
                ))}
            <div className="w-1/2 p-3 flex flex-col">
                <div className="w-full flex justify-between">
                    <h2>Connector 2</h2>
                    <div className="flex items-center justify-end w-1/3">
                        <span className="ml-2 relative inline-flex rounded-full h-3 w-3 bg-red-700"></span>
                    </div>
                </div>
                <hr className="my-2" />
                <div className="w-[120px]">
                    <img src="/assets/truck.png" className="w-full h-full" />
                </div>
                <div className="flex my-2">
                    <span className="pr-2">idTag :</span>
                    <span>331202312134</span>
                </div>
                <div className="flex items-center my-2">
                    <span className="pr-2">Meter Start :</span>
                    <span>202332</span>
                </div>
                <div className="flex items-center my-2">
                    <span className="pr-2">Time Start :</span>
                    <span>{}</span>
                </div>
                <div className="flex items-center my-2">
                    <span className="pr-2">Imported :</span>
                    <span>300</span>
                    <span>kW</span>
                </div>
            </div>
        </div>
    );
}

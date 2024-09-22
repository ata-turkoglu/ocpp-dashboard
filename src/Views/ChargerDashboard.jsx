import React, { useState } from "react";
import ChargerList from "../components/ChargerList";
import Connectors from "../components/Connectors";

export default function ChargerDashboard() {
    const [selectedChargerId, setSelectedChargerId] = useState(null);
    const selectCharger = (charger_id) => {
        setSelectedChargerId(charger_id);
    };

    return (
        <div id="chargerDashboard" className="w-full h-full flex p-3">
            <ChargerList selectCharger={selectCharger} />
            {selectedChargerId && (
                <Connectors selectedChargerId={selectedChargerId} />
            )}
        </div>
    );
}

import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function ChargerList({ selectCharger }) {
    const { chargers, onlineChargers } = useContext(AppContext);
    return (
        <div
            id="chargers"
            className="bg-white shadow-sm min-w-[200px] max-w-[250px] h-fit border p-3"
        >
            <h2>Chargers</h2>
            <hr className="my-2" />
            <ul>
                {chargers.length > 0 &&
                    chargers.map((charger) => {
                        return (
                            <li
                                className="flex items-center justify-between my-2"
                                key={charger.charger_id}
                                onClick={() =>
                                    selectCharger(charger.charger_id)
                                }
                            >
                                <p className="cursor-pointer">
                                    {charger.charger_code}
                                </p>
                                {charger.online && (
                                    <div className="flex items-center justify-end w-1/3">
                                        {charger.status == "Charging" && (
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-50"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-600"></span>
                                            </span>
                                        )}

                                        <span className="ml-2 relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                    </div>
                                )}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}

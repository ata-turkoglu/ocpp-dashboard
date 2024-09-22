import { useLayoutEffect, useState } from "react";

export default function ConnectorView({ charger, connectorId }) {
    const [connector, setConnector] = useState(null);

    useLayoutEffect(() => {
        setConnector(charger.connectors[connectorId]);
    }, [charger, connectorId]);

    return (
        <>
            {connector && (
                <div className="w-1/2 p-3 flex flex-col border-r">
                    <div className="w-full flex justify-between">
                        <h2>Connector {connectorId}</h2>
                        <div className="flex items-center justify-end w-1/3">
                            {connector.status == "Charging" && (
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-50"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-600"></span>
                                </span>
                            )}
                            {connector.status == "Unavailable" ? (
                                <span className="ml-2 relative inline-flex rounded-full h-3 w-3 bg-gray-500"></span>
                            ) : connector.status == "Faulted" ? (
                                <span className="ml-2 relative inline-flex rounded-full h-3 w-3 bg-red-700"></span>
                            ) : (
                                <span className="ml-2 relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            )}
                        </div>
                    </div>
                    <hr className="my-2" />
                    <div className="w-[120px]">
                        <img
                            src="/assets/truck.png"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="flex items-center my-2">
                        <span className="pr-2">idTag :</span>
                        <span>331202312133</span>
                    </div>
                    <div className="flex items-center my-2">
                        <span className="pr-2">Meter Start :</span>
                        <span>212332</span>
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
            )}
        </>
    );
}

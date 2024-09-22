import React from "react";

export default function Header() {
    return (
        <div className="bg-slate-200 w-full h-[60px] flex items-center justify-between px-6">
            <span>Header</span>
            <div className="flex">
                <span className="mx-2">Chargers</span>
                <span className="mx-2">Vehicles</span>
            </div>
        </div>
    );
}

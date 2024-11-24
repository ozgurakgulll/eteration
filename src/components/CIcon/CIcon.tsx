"use client";
import {IIconDefinition} from "./IIconDefinition";

export function CIcon({

                          icon,
                          asText = false,
                          fixedSize = false
                      }: {

    icon?: IIconDefinition;
    asText?: boolean;
    fixedSize?: boolean;
}) {
    return (
        <div
            style={{width: fixedSize ? `${1.2 * 1.5}em` : undefined}}
        >
            <div
                style={{
                    width: "1.2em",
                    height: "1.2em",
                    transform: asText ? "translate(0, 8%)" : undefined
                }}
            >
                {icon ? (
                    <svg viewBox={icon.viewBox} xmlns="http://www.w3.org/2000/svg">
                        {icon.pathData.map((pathData, index) => (
                            <path key={index} fill="currentColor" d={pathData}/>
                        ))}
                    </svg>
                ) : (
                    <span className="font-bold">?</span>
                )}
            </div>
        </div>
    );
}

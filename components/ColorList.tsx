"use client"
import { useState, useEffect} from "react";
import { mockColor, isUnique } from "@/tests/utils";
import { ColorListProps } from "@/types";

const ColorList = ({ colors }: ColorListProps) => {
    const [randomHexValues, setRandomHexValues] = useState<string[]>([]);

const generateRandomHex = (): string => {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  };
  
  const generateUniqueRandomHexValues = (count: number): string[] => {
    const hexValues: string[] = [];
    while (hexValues.length < count) {
      const randomHex = generateRandomHex();
      if (!hexValues.includes(randomHex)) {
        hexValues.push(randomHex);
      }
    }
    return hexValues;
  };

  console.log(randomHexValues)

  useEffect(() => {
    const uniqueHexValues = generateUniqueRandomHexValues(5);
    setRandomHexValues(uniqueHexValues);
  }, []);
  

  return (
    <div>
      <div className="flex justify-evenly h-[80vh]" role="list">
      {randomHexValues.map((color, index) => (
        <button key={index} style={{ backgroundColor: color }} className={`text-center flex flex-col justify-between h-full w-full`}>
          
            {color}
        
          {/* Add remove button*/}
          {/* Add add button */}
        </button>
      ))}
    </div>
    </div>
  )
}

export default ColorList

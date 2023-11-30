import { useState, useEffect } from "react";
import { ColorItemProps } from "@/types";
import { hexcolorRegex } from "@/tests/utils";

const ColorItem = ({ color }: ColorItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
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

  const handleHexButtonClick = () => {
    setIsEditing(true);
  };

  const handleHexInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (newValue.match(hexcolorRegex)) {
      setRandomHexValues([...randomHexValues.slice(0, 4), newValue]);
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsEditing(false);
  };

  useEffect(() => {
    const uniqueHexValues = generateUniqueRandomHexValues(5);
    setRandomHexValues(uniqueHexValues);
  }, []);

  return (
    <li className="flex w-full">
      {isEditing ? (
        <form onSubmit={handleFormSubmit}>
          {randomHexValues.map((color, index) => (
            <input
              key={index}
              type="text"
              value={randomHexValues[4] || ''}
              onChange={handleHexInputChange}
              aria-label="Hex color"
              onBlur={() => setIsEditing(false)}
              autoFocus
            />
          ))}
        </form>
      ) : (
        randomHexValues.map((color, index) => (
          <button
            onClick={handleHexButtonClick}
            key={index}
            style={{ backgroundColor: color }}
            className={`text-center flex justify-between h-full w-full`}
          >
            <h3>{color}</h3>
          </button>
        ))
      )}
    </li>
  );
};

export default ColorItem;

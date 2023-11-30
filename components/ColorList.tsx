"use client"
import { ColorListProps, ColorItemProps } from "@/types";
import ColorItem from "./ColorItem";

const ColorList = ({ colors }: ColorListProps) => {

  return (
    <div role="list">
            <ColorItem />
        {/* Add remove button*/}
        {/* Add add button */}
    </div>
  )
}

export default ColorList

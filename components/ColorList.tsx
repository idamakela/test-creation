"use client"
import { useState, useEffect} from "react";
import { isUnique } from "@/tests/utils";
import { ColorListProps } from "@/types";
import ColorItem from "./ColorItem";

const ColorList = ({ colors }: ColorListProps) => {

  return (
    <div>
        <ul className="flex justify-evenly h-[80vh]" role="list">
            <ColorItem />
         </ul>
        {/* Add remove button*/}
        {/* Add add button */}
    </div>

  )
}

export default ColorList

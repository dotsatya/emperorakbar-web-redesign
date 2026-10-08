"use client";

import React, { useState } from "react";
import { websiteData } from "@/data/websiteData";
import GradeTabs, { Grade } from "./GradeTabs";
import VisualizerArea from "./VisualizerArea";
import GradeInfo from "./GradeInfo";

export default function CardamomVisualizer() {
  const { grading } = websiteData.about;
  const [activeGrade, setActiveGrade] = useState<Grade>(grading[0]);

  const getTargetSize = (color: string) => {
    switch (color) {
      case "Purple": return 8;
      case "Pink": return 7.5;
      case "Green": return 7;
      case "Orange": return 6.5;
      case "Red": return 6;
      default: return 7;
    }
  };

  const currentSize = getTargetSize(activeGrade.color);
  
  // Calculate visual scale factor.
  // Assuming a 9mm pod takes 100% of the allocated space.
  const scaleFactor = currentSize / 9;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Tabs */}
      <GradeTabs 
        grading={grading} 
        activeGrade={activeGrade} 
        setActiveGrade={setActiveGrade} 
      />

      <div 
        className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 rounded-[3rem] p-8 md:p-12 transition-colors duration-500 shadow-inner"
        style={{ 
          backgroundColor: activeGrade.color === 'Purple' ? 'rgba(107, 44, 88, 0.05)' : 
                           activeGrade.color === 'Pink' ? 'rgba(213, 53, 130, 0.05)' :
                           activeGrade.color === 'Green' ? 'rgba(45, 106, 54, 0.05)' :
                           activeGrade.color === 'Orange' ? 'rgba(232, 108, 36, 0.05)' : 'rgba(206, 43, 40, 0.05)'
        }}
      >
        {/* Visualizer Area */}
        <VisualizerArea 
          activeGrade={activeGrade}
          currentSize={currentSize}
          scaleFactor={scaleFactor}
        />
        
        {/* Grade Info */}
        <GradeInfo activeGrade={activeGrade} />
      </div>
    </div>
  );
}

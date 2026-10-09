import React from "react";
import { Grade } from "./GradeTabs";

interface GradeInfoProps {
  activeGrade: Grade;
}

export default function GradeInfo({ activeGrade }: GradeInfoProps) {
  return (
    <div className="text-center lg:text-left max-w-sm w-full shrink-0 flex flex-col justify-center">
      <h3 className="text-2xl font-serif font-bold text-stone-800 mb-4 transition-colors duration-300"
          style={{ 
            color: activeGrade.color === 'Purple' ? '#6b2c58' : 
                   activeGrade.color === 'Pink' ? '#d53582' :
                   activeGrade.color === 'Green' ? '#2d6a36' :
                   activeGrade.color === 'Orange' ? '#e86c24' : '#ce2b28'
          }}>
        {activeGrade.color} Grade
      </h3>
      <p className="text-lg text-stone-600 mb-2">
        <strong>Size:</strong> {activeGrade.diameter}
      </p>
      <p className="text-stone-500">
        {activeGrade.description}
      </p>
    </div>
  );
}

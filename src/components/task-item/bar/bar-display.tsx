import React from "react";
import style from "./bar.module.css";

type BarDisplayProps = {
  x: number;
  y: number;
  taskStarted: boolean;
  width: number;
  height: number;
  isSelected: boolean;
  /* progress start point */
  progressX: number;
  progressWidth: number;
  plannedX: number;
  plannedWidth: number;
  barCornerRadius: number;
  styles: {
    backgroundColor: string;
    backgroundSelectedColor: string;
    progressColor: string;
    progressSelectedColor: string;
  };
  onMouseDown: (event: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
};
export const BarDisplay: React.FC<BarDisplayProps> = ({
  x,
  y,
  taskStarted,
  width,
  height,
  isSelected,
  progressX,
  progressWidth,
  plannedX,
  plannedWidth,
  barCornerRadius,
  styles,
  onMouseDown,
}) => {
  const getProcessColor = () => {
    if (!taskStarted)
      return "transparent";
    else
      return isSelected ? styles.progressSelectedColor : styles.progressColor;
  };

  const getBarColor = () => {
    if (!taskStarted)
      return "transparent";
    else
      return isSelected ? styles.backgroundSelectedColor : styles.backgroundColor;
  };

  return (
    <g onMouseDown={onMouseDown}>
      <rect
        x={x}
        width={width}
        y={y}
        height={height}
        ry={barCornerRadius}
        rx={barCornerRadius}
        fill={getBarColor()}
        className={style.barBackground}
      />
      <rect
        x={progressX}
        width={progressWidth}
        y={y}
        height={height}
        ry={barCornerRadius}
        rx={barCornerRadius}
        fill={getProcessColor()}
      />
      <rect
        x={plannedX}
        width={plannedWidth}
        y={y}
        height={height}
        ry={barCornerRadius}
        rx={barCornerRadius}
        fill={"transparent"}
        stroke="black"
        strokeDasharray="4"
      />
    </g>
  );
};

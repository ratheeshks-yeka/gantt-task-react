import React from "react";
import "gantt-task-react/dist/index.css";
import { ViewMode } from "gantt-task-react";
import { FaSignOutAlt } from 'react-icons/fa';
// const handleLogout = () => {
//   localStorage.removeItem("isLoggedIn"); 
// };

type ViewSwitcherProps = {
  isChecked: boolean;
  viewMode: string;
  onViewListChange: (isChecked: boolean) => void;
  onViewModeChange: (viewMode: ViewMode) => void;
  onLogout: () => void;
};
export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({
  onViewModeChange,
  onViewListChange,
  isChecked,
  viewMode,
  onLogout,

}) => {
  return (
    <div className="ViewContainer" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', alignItems: 'center' }}>
      <span style={{ fontSize: '18px', color: "white", height: "100%", marginTop: "20px", marginLeft: "20px" }}>Gantt View</span>
      <div style={{ display: 'flex', justifyContent: 'flex-end', height: "100%" }}>
        <button className={viewMode === ViewMode.Day ? "ButtonSelected" : "Button"} onClick={() => onViewModeChange(ViewMode.Day)}>
          Day
        </button>
        <button
          onClick={() => onViewModeChange(ViewMode.Week)}
          className={viewMode === ViewMode.Week ? "ButtonSelected" : "Button"}
        >
          Week
        </button>
        <button
          className={viewMode === ViewMode.Month ? "ButtonSelected" : "Button"}
          onClick={() => onViewModeChange(ViewMode.Month)}
        >
          Month
        </button>
        <button
          className={viewMode === ViewMode.Year ? "ButtonSelected" : "Button"}
          onClick={() => onViewModeChange(ViewMode.Year)}
        >
          Year
        </button>
        <button
          className={viewMode === ViewMode.QuarterYear ? "ButtonSelected" : "Button"}
          onClick={() => onViewModeChange(ViewMode.QuarterYear)}
        >
          Q Year
        </button>
        <div className="Switch">
          <label className="Switch_Toggle">
            <input
              type="checkbox"
              defaultChecked={isChecked}
              onClick={() => onViewListChange(!isChecked)}
            />
            <span className="Slider" />
          </label>
          Show Task List
        </div>
        <button
          onClick={onLogout}
        >
          <FaSignOutAlt style={{fontSize:"20px"}}/>
        </button>
        
      </div>
    </div>
  );
};

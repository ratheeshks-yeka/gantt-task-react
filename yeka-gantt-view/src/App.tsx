import React, { useEffect } from "react";
import { Task, ViewMode, Gantt } from "gantt-task-react";
import { ViewSwitcher } from "./components/view-switcher";
import { getStartEndDateForProject } from "./helper";
import "gantt-task-react/dist/index.css";
import MultiToggle from "react-multi-toggle";
import axios from 'axios';
import Login from "./components/Loginpage";
const App = () => {
  const [isloggedIn, setIsLoggedIn] = React.useState<string | null>("false");
  const [view, setView] = React.useState<ViewMode>(ViewMode.Day);
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [isChecked, setIsChecked] = React.useState(true);
  const [ganttType, setGanttType] = React.useState(1);
  const URL: string = (process.env.REACT_APP_BASE_API_URL as string);
  let columnWidth = 65;
  if (view === ViewMode.Year) {
    columnWidth = 350;
  } else if (view === ViewMode.Month) {
    columnWidth = 300;
  } else if (view === ViewMode.Week) {
    columnWidth = 250;
  }
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn'))
  }, []);
  const fetchData = async () => {
    try {
      const apiurl = `${URL}${ganttType === 1 ? "project-data" : ganttType === 2 ? "employee-data" : "workOrder-data"}`;
      const response = await axios.post(apiurl, {
        headers: {
          'Content-Type': 'application/json'
        },
      });
      let tasks: Task[] = [];
      tasks = response.data.result.data;
      tasks.forEach(t => {
        t.start = new Date(t.start)
        t.end = new Date(t.end)
        t.plannedStart = new Date(t.plannedStart)
        t.plannedEnd = new Date(t.plannedEnd)
      });
      setTasks(tasks);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    setTasks([])
    fetchData();
  }, [ganttType]);

  const handleTaskChange = async (task: Task) => {
    let newTasks = tasks.map(t => (t.id === task.id ? task : t));
    if (task.project)
      getStartEndDateForProject(newTasks, task.project);
    setTasks(newTasks);

    try {
      let params = { "params": { "type": task.subType, "id": task.id.split("-")[1], "start": task.taskStarted ? new Date(task.start).toISOString() : "", "end": task.taskStarted ? new Date(task.end).toISOString() : "", "plannedStart": new Date(task.plannedStart).toISOString(), "plannedEnd": new Date(task.plannedEnd).toISOString() } }
      const response = await axios.post(`${URL}update-task`
        , params
        , {
          headers: {
            'Content-Type': 'application/json'
          },
        });
      if (response) {
        fetchData();
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    window.location.reload();
  };


  const handleTaskDelete = (task: Task) => {
    const conf = window.confirm("Are you sure about " + task.name + " ?");
    if (conf) {
      setTasks(tasks.filter(t => t.id !== task.id));
    }
    return conf;
  };

  const handleProgressChange = async (task: Task) => {
    setTasks(tasks.map(t => (t.id === task.id ? task : t)));
  };

  const handleDblClick = (task: Task) => {
    const MENU_ID: string = process.env["REACT_APP_" + task.subType.toUpperCase() + "_MENU_ID"] as string;
    const ACTION_ID: string = process.env["REACT_APP_" + task.subType.toUpperCase() + "_ACTION_ID"] as string;
    const MODAL: string = process.env["REACT_APP_" + task.subType.toUpperCase() + "_MODAL"] as string;
    const CSID: string = (process.env.REACT_APP_CSID as string);
    const taskid = MODAL === "mrp.production" && task.id.split("-")[0] === "T" ? task?.project?.split("-")[1] : task.id.split("-")[1];
    const w = window.open(`${URL}web#id=${taskid}&cids=${CSID}&menu_id=${MENU_ID}&action=${ACTION_ID}&active_id=1&model=${MODAL}&view_type=form`, '_blank');
    if (w) {
      w.focus();
    }
  };

  const handleClick = (task: Task) => {
    console.log("On Click event Id:" + task.id);
  };

  const handleSelect = (task: Task, isSelected: boolean) => {
    console.log(task.name + " has " + (isSelected ? "selected" : "unselected"));
  };

  const handleExpanderClick = (task: Task) => {
    setTasks(tasks.map(t => (t.id === task.id ? task : t)));
  };
  const onGanttTypeChange = (value: number) => {
    setGanttType(value)
  };
  const groupOptions = [
    {
      displayName: 'Project Wise Tasks',
      value: 1
    },
    {
      displayName: 'Employee Wise Tasks',
      value: 2
    },
    {
      displayName: 'Work Orders',
      value: 3
    },
  ];

  return (
    isloggedIn === 'true' ?
      <div className="Wrapper">
        <ViewSwitcher
          onViewModeChange={viewMode => setView(viewMode)}
          onViewListChange={setIsChecked}
          onLogout={handleLogout}
          isChecked={isChecked}
          viewMode={view}
        />
        <div className="Container">
          <MultiToggle
            options={groupOptions}
            selectedOption={ganttType}
            onSelectOption={onGanttTypeChange}
          />
          {tasks.length > 0 &&
            <Gantt
              tasks={tasks}
              viewMode={view}
              onDateChange={handleTaskChange}
              onDelete={handleTaskDelete}
              onProgressChange={handleProgressChange}
              onDoubleClick={handleDblClick}
              onClick={handleClick}
              onSelect={handleSelect}
              onExpanderClick={handleExpanderClick}
              listCellWidth={isChecked ? "155px" : ""}
              columnWidth={columnWidth}
              arrowColor="red"
              ganttHeight={window.innerHeight}
            />}
        </div>
      </div>
      : <Login />
  );
};

export default App;

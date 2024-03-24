import React, { useEffect } from "react";
import { Task, ViewMode, Gantt } from "gantt-task-react";
import { ViewSwitcher } from "./components/view-switcher";
import { getStartEndDateForProject } from "./helper";
import "gantt-task-react/dist/index.css";
import MultiToggle from "react-multi-toggle";
import axios from 'axios';

// Init
const App = () => {
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

  const fetchData = async () => {
    try {
      // const response = await axios.post('http://10.56.99.50:8069/gantt-data', {"type":ganttType}, {
      const response = await axios.post(`${URL}${ganttType === 1 ? "project-data" : ganttType === 2 ? "employee-data" : "workOrder-data"}`, {
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
    fetchData();
  }, [ganttType]);

  const handleTaskChange = async (task: Task) => {
    console.log("task--", task)
    let newTasks = tasks.map(t => (t.id === task.id ? task : t));
    if (task.project)
      getStartEndDateForProject(newTasks, task.project);
    setTasks(newTasks);

    try {
      const response = await axios.post(`${URL}update-task`
        , { "params": { "task_id": task.id.replace("T-", ""), "start": new Date(task.start).toISOString(), "end": new Date(task.end).toISOString(), "plannedStart": new Date(task.plannedStart).toISOString(), "plannedEnd": new Date(task.plannedEnd).toISOString() } }
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

  const handleTaskDelete = (task: Task) => {
    const conf = window.confirm("Are you sure about " + task.name + " ?");
    if (conf) {
      setTasks(tasks.filter(t => t.id !== task.id));
    }
    return conf;
  };

  const handleProgressChange = async (task: Task) => {
    setTasks(tasks.map(t => (t.id === task.id ? task : t)));
    console.log("On progress change Id:" + task.id);
  };

  const handleDblClick = (task: Task) => {
    const w = window.open(`${URL}web#id=${task.id.replace("T-", "").replace("P-", "")}&cids=1&menu_id=220&action=329&active_id=1&model=project.task&view_type=form`, '_blank');
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
    console.log("On expander click Id:" + task.id);
  };
  const onGanttTypeChange = (value: number) => { setGanttType(value) };
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
    <div className="Wrapper">
      <ViewSwitcher
        onViewModeChange={viewMode => setView(viewMode)}
        onViewListChange={setIsChecked}
        isChecked={isChecked}
        viewMode={view}
      />
      <div className="Container">
        <MultiToggle
          options={groupOptions}
          selectedOption={ganttType}
          onSelectOption={onGanttTypeChange}
        />
        {tasks.length &&
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
          />}
      </div>
    </div>
  );
};

export default App;

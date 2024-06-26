import React, { useMemo } from "react";
import styles from "./task-list-table.module.css";
import { Task } from "../../types/public-types";

const localeDateStringCache = {};
const toLocaleDateStringFactory =
  (locale: string) =>
    (date: Date, dateTimeOptions: Intl.DateTimeFormatOptions) => {
      const key = date.toString();
      let lds = localeDateStringCache[key];
      if (!lds) {
        lds = date.toLocaleDateString(locale, dateTimeOptions);
        localeDateStringCache[key] = lds;
      }
      return lds;
    };
const dateTimeOptions: Intl.DateTimeFormatOptions = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};

export const TaskListTableDefault: React.FC<{
  rowHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
  locale: string;
  tasks: Task[];
  selectedTaskId: string;
  setSelectedTask: (taskId: string) => void;
  onExpanderClick: (task: Task) => void;
}> = ({
  rowHeight,
  rowWidth,
  tasks,
  fontFamily,
  fontSize,
  locale,
  onExpanderClick,
}) => {
    const toLocaleDateString = useMemo(
      () => toLocaleDateStringFactory(locale),
      [locale]
    );

    const handleClick = (task: Task) => {
      const URL: string = (process.env.REACT_APP_BASE_API_URL as string);
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

    const getStepNumber = (t: Task): any => {
      let step = 0;
      if (t) {
        if (t.type === "project")
          return step;
        else
          if (t.parentTaskId === "")
            return 1;
          else
            step = 1 + getStepNumber(tasks.filter(x => x.id === t.parentTaskId)[0])
      }
      return step;
    }

    return (
      <div
        className={styles.taskListWrapper}
        style={{
          fontFamily: fontFamily,
          fontSize: fontSize,
        }}
      >
        {tasks.map(t => {
          let expanderSymbol = "";
          if (t.hideChildren === false) {
            expanderSymbol = "▼";
          } else if (t.hideChildren === true) {
            expanderSymbol = "▶";
          }
          let showArrow = (tasks.filter(x => x.parentTaskId === t.id && t.type === "task").length > 0 || tasks.filter(x => x.project === t.id && t.type === "project").length > 0 || t.hideChildren === true)
          return (
            <div
              className={styles.taskListTableRow}
              style={{ height: rowHeight }}
              key={`${t.id}row`}
            >
              <div
                className={styles.taskListCell}
                style={{
                  minWidth: rowWidth,
                  maxWidth: rowWidth,
                }}
                title={t.name}
              >
                <div className={styles.taskListNameWrapper} style={{ "paddingLeft": (showArrow ? getStepNumber(t) : getStepNumber(t) + 1) + "rem" }}>
                  {showArrow && <div
                    className={
                      expanderSymbol
                        ? styles.taskListExpander
                        : styles.taskListEmptyExpander
                    }
                    onClick={() => onExpanderClick(t)}
                  >
                    {expanderSymbol}
                  </div>}
                  <div onClick={() => handleClick(t)}><span style={{ "cursor": "pointer", "color": "blue", "textDecoration": "underline" }}> {t.name}</span></div>
                </div>
              </div>
              <div
                className={styles.taskListCell}
                style={{
                  minWidth: rowWidth,
                  maxWidth: rowWidth,
                }}
              >
                &nbsp;{toLocaleDateString(t.start, dateTimeOptions)}
              </div>
              <div
                className={styles.taskListCell}
                style={{
                  minWidth: rowWidth,
                  maxWidth: rowWidth,
                }}
              >
                &nbsp;{toLocaleDateString(t.end, dateTimeOptions)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

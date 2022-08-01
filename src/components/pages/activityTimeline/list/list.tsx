import React from "react";
import { ActivityTimelineChart } from "../../../charts/activity/activityTimelineChart";
import { ActivityTimelineChartGradient } from "../../../charts/activity/activityTimelineChartGradient";
import styles from "./list.module.scss";

export interface ListItem {
  date: string;
}

export interface ListProps {
  data: ListItem[];
}

export const List = ({ data }: ListProps): JSX.Element => {
  if (!data?.length) return <div>Нет данных</div>;

  return (
    <div>
      {data?.map((item) => {
        const { date } = item;
        return (
          <div>
            <h2 className={styles.header}>{date}</h2>
            <ActivityTimelineChart />
          </div>
        );
      })}
    </div>
  );
};

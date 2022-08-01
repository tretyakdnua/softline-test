import React from "react";
import ReactApexChart from "react-apexcharts";
import styles from "./activityTimelineChart.module.scss";

export const data = {
  series: [
    {
      name: "9ч 12мин",
      data: [
        {
          x: "Запрещенные ресурсы (12ч:30мин)",
          y: [9, 10],
          fillColor: "rgba(0, 0, 255, .5)",
        },
        {
          x: "Запрещенные ресурсы (12ч:30мин)",
          y: [10, 11],
          fillColor: "rgba(0, 0, 255, .1)",
        },
        {
          x: "Запрещенные ресурсы (12ч:30мин)",
          y: [11, 12],
          fillColor: "rgba(0, 0, 255, .2)",
        },
        {
          x: "Запрещенные ресурсы (12ч:30мин)",
          y: [12, 13],
          fillColor: "rgba(0, 0, 255, 4)",
        },
        {
          x: "Запрещенные ресурсы (12ч:30мин)",
          y: [13, 14],
          fillColor: "rgba(0, 0, 255, .7)",
        },
        {
          x: "Запрещенные ресурсы (12ч:30мин)",
          y: [14, 15],
          fillColor: "rgba(0, 0, 255, .2)",
        },
        {
          x: "Запрещенные ресурсы (12ч:30мин)",
          y: [15, 16],
          fillColor: "rgba(0, 0, 255, .3)",
        },
        {
          x: "Запрещенные ресурсы (12ч:30мин)",
          y: [16, 17],
          fillColor: "rgba(0, 0, 255, .6)",
        },
        {
          x: "Запрещенные ресурсы (12ч:30мин)",
          y: [17, 18],
          fillColor: "rgba(0, 0, 255, .9)",
        },
      ],
    },
    {
      name: "12ч 00мин",
      data: [
        {
          x: "Онлайн игры (0ч:45мин)",
          y: [9, 10],
          fillColor: "rgba(0, 227, 150, .1)",
        },
        {
          x: "Онлайн игры (0ч:45мин)",
          y: [10, 11],
          fillColor: "rgba(0, 227, 150, .2)",
        },
        {
          x: "Онлайн игры (0ч:45мин)",
          y: [11, 12],
          fillColor: "rgba(0, 227, 150, .3)",
        },
        {
          x: "Онлайн игры (0ч:45мин)",
          y: [12, 13],
          fillColor: "rgba(0, 227, 150, .4)",
        },
        {
          x: "Онлайн игры (0ч:45мин)",
          y: [13, 14],
          fillColor: "rgba(0, 227, 150, .5)",
        },
        {
          x: "Онлайн игры (0ч:45мин)",
          y: [14, 15],
          fillColor: "rgba(0, 227, 150, .6)",
        },
        {
          x: "Онлайн игры (0ч:45мин)",
          y: [15, 16],
          fillColor: "rgba(0, 227, 150, .7)",
        },
        {
          x: "Онлайн игры (0ч:45мин)",
          y: [16, 17],
          fillColor: "rgba(0, 227, 150, .8)",
        },
        {
          x: "Онлайн игры (0ч:45мин)",
          y: [17, 18],
          fillColor: "rgba(0, 227, 150, .9)",
        },
      ],
    },
    {
      name: "1ч 18мин",
      data: [
        {
          x: "Разработка и программирование",
          y: [10, 11],
          fillColor: "rgba(254, 176, 25, .7)",
        },
        {
          x: "Разработка и программирование",
          y: [11, 12],
          fillColor: "rgba(254, 176, 25, .2)",
        },
        {
          x: "Разработка и программирование",
          y: [12, 13],
          fillColor: "rgba(254, 176, 25, .3)",
        },
        {
          x: "Разработка и программирование",
          y: [13, 14],
          fillColor: "rgba(254, 176, 25, .1)",
        },
        {
          x: "Разработка и программирование",
          y: [17, 18],
          fillColor: "rgba(254, 176, 25, .9)",
        },
      ],
    },
    {
      name: "9ч 12мин",
      data: [
        {
          x: "Файлообменники",
          y: [9, 10],
        },
        {
          x: "Файлообменники",
          y: [15, 16],
        },
      ],
    },
    {
      name: "12ч 2мин",
      data: [
        {
          x: "Социальные сети",
          y: [14, 15],
        },
        {
          x: "Социальные сети",
          y: [17, 18],
        },
      ],
    },
    {
      name: "0ч 20мин",
      data: [
        {
          x: "Сайты знакомств",
          y: [12, 13],
        },
      ],
    },
    {
      name: "0ч 56мин",
      data: [
        {
          x: "Игры",
          y: [9, 10],
        },
        {
          x: "Игры",
          y: [16, 17],
        },
      ],
    },
    {
      name: "24ч 00мин",
      data: [
        {
          x: "Видео-хостинг",
          y: [9, 10],
        },
      ],
    },
    {
      name: "6.8к",
      data: [
        {
          x: "Отправлено писем",
          y: [10, 11],
        },
        {
          x: "Отправлено писем",
          y: [13, 14],
        },
      ],
    },
  ],
  options: {
    chart: {
      height: 420,
      type: "rangeBar",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
        rangeBarGroupRows: true,
      },
    },
    colors: [
      "#008FFB",
      "#00E396",
      "#FEB019",
      "#FF4560",
      "#775DD0",
      "#3F51B5",
      "#546E7A",
      "#D4526E",
      "#8D5B4C",
      "#F86624",
      "#D7263D",
      "#1B998B",
      "#2E294E",
      "#F46036",
      "#E2C044",
    ],
    fill: {
      type: "solid",
    },
    xaxis: {
      type: "number",
      min: 9,
      max: 18,
      tickAmount: 9,
    },
    yaxis: {
      show: true,
      labels: {
        minWidth: 200,
        maxWidth: 400,
      },
    },
    legend: {
      show: false,
      position: "bottom",
    },
    tooltip: {
      custom: function (options: any) {
        console.log("options", options);
        return `<div className="atc__tooltip">
            <div className="${styles.toolboxWrap}">
              <div><span>Дата:</span> <span>27.07.2022 12:00</span></div>
              <div><span>Активность:</span> <span>345сек.</span></div>
            </div>
          <div>`;
      },
    },
    grid: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
  },
};

export const ActivityTimelineChart = (): JSX.Element => {
  return (
    <div id="chart">
      <ReactApexChart
        options={data.options as any}
        series={data.series}
        type="rangeBar"
        height={420}
      />
    </div>
  );
};

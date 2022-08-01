import React from "react";
import ReactApexChart from "react-apexcharts";
import styles from "./activityTimelineChart.module.scss";

export const data = {
  series: [
    {
      name: "ААА",
      data: [
        {
          x: "Запрещенные (12ч:30м)",
          y: [9, 10],
          fill: {
            type: "solid",
          },
        },
      ],
    },
    {
      name: "ААА",
      data: [
        {
          x: "Запрещенные (12ч:30м)",
          y: [10, 11],
          fill: {
            type: "solid",
          },
        },
      ],
    },
    {
      name: "ААА",
      data: [
        {
          x: "Запрещенные (12ч:30м)",
          y: [11, 12],
          fill: {
            type: "solid",
          },
        },
      ],
    },
    {
      name: "ААА",
      data: [
        {
          x: "Запрещенные (12ч:30м)",
          y: [12, 13],
          fill: {
            type: "solid",
          },
        },
      ],
    },
    {
      name: "ААА",
      data: [
        {
          x: "Запрещенные (12ч:30м)",
          y: [13, 14],
          fill: {
            type: "solid",
          },
        },
      ],
    },
    {
      name: "ААА",
      data: [
        {
          x: "Запрещенные (12ч:30м)",
          y: [14, 15],
          fill: {
            type: "solid",
          },
        },
      ],
    },
    {
      name: "ААА",
      data: [
        {
          x: "Запрещенные (12ч:30м)",
          y: [15, 16],
          fill: {
            type: "solid",
          },
        },
      ],
    },
    {
      name: "ААА",
      data: [
        {
          x: "Запрещенные (12ч:30м)",
          y: [16, 17],
          fill: {
            type: "solid",
          },
        },
      ],
    },
    {
      name: "ААА",
      data: [
        {
          x: "Запрещенные (12ч:30м)",
          y: [17, 18],
          fill: {
            type: "solid",
          },
        },
      ],
    },
    {
      name: "BBB",
      data: [
        {
          x: "Онлайн игры (0ч:45м)",
          y: [9, 10],
        },
      ],
    },
    {
      name: "BBB",
      data: [
        {
          x: "Онлайн игры (0ч:45м)",
          y: [10, 11],
        },
      ],
    },
    {
      name: "BBB",
      data: [
        {
          x: "Онлайн игры (0ч:45м)",
          y: [11, 12],
        },
      ],
    },
    {
      name: "BBB",
      data: [
        {
          x: "Онлайн игры (0ч:45м)",
          y: [12, 13],
        },
      ],
    },
    {
      name: "BBB",
      data: [
        {
          x: "Онлайн игры (0ч:45м)",
          y: [13, 14],
        },
      ],
    },
    {
      name: "BBB",
      data: [
        {
          x: "Онлайн игры (0ч:45м)",
          y: [14, 15],
        },
      ],
    },
    {
      name: "BBB",
      data: [
        {
          x: "Онлайн игры (0ч:45м)",
          y: [15, 16],
        },
      ],
    },
    {
      name: "BBB",
      data: [
        {
          x: "Онлайн игры (0ч:45м)",
          y: [16, 17],
        },
      ],
    },
    {
      name: "BBB",
      data: [
        {
          x: "Онлайн игры (0ч:45м)",
          y: [17, 18],
        },
      ],
    },

    {
      name: "1ч 18мин",
      data: [
        {
          x: "Разработка и программирование",
          y: [10, 11],
        },
        {
          x: "Разработка и программирование",
          y: [11, 12],
        },
        {
          x: "Разработка и программирование",
          y: [12, 13],
        },
        {
          x: "Разработка и программирование",
          y: [13, 14],
        },
        {
          x: "Разработка и программирование",
          y: [17, 18],
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
      height: 620,
      type: "rangeBar",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
        rangeBarGroupRows: true,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        colorStops: [
          [
            {
              offset: 10,
              color: "white",
              opacity: 1,
            },
            {
              offset: 90,
              color: "blue",
              opacity: 1,
            },
          ],
          [
            {
              offset: 40,
              color: "white",
              opacity: 1,
            },
            {
              offset: 60,
              color: "blue",
              opacity: 1,
            },
          ],
          [
            {
              offset: 0,
              color: "white",
              opacity: 1,
            },
            {
              offset: 100,
              color: "blue",
              opacity: 1,
            },
          ],
          [
            {
              offset: 90,
              color: "white",
              opacity: 1,
            },
            {
              offset: 10,
              color: "blue",
              opacity: 1,
            },
          ],
          [
            {
              offset: 76,
              color: "white",
              opacity: 1,
            },
            {
              offset: 24,
              color: "blue",
              opacity: 1,
            },
          ],
          [
            {
              offset: 9,
              color: "white",
              opacity: 1,
            },
            {
              offset: 91,
              color: "blue",
              opacity: 1,
            },
          ],
          [
            {
              offset: 90,
              color: "white",
              opacity: 1,
            },
            {
              offset: 10,
              color: "blue",
              opacity: 1,
            },
          ],
          [
            {
              offset: 70,
              color: "white",
              opacity: 1,
            },
            {
              offset: 30,
              color: "blue",
              opacity: 1,
            },
          ],
          [
            {
              offset: 50,
              color: "white",
              opacity: 1,
            },
            {
              offset: 50,
              color: "blue",
              opacity: 1,
            },
          ],

          [
            {
              offset: 0,
              color: "white",
              opacity: 1,
            },
            {
              offset: 100,
              color: "#00E396",
              opacity: 1,
            },
          ],
          [
            {
              offset: 99,
              color: "white",
              opacity: 1,
            },
            {
              offset: 1,
              color: "#00E396",
              opacity: 1,
            },
          ],
          [
            {
              offset: 67,
              color: "white",
              opacity: 1,
            },
            {
              offset: 33,
              color: "#00E396",
              opacity: 1,
            },
          ],
          [
            {
              offset: 34,
              color: "white",
              opacity: 1,
            },
            {
              offset: 66,
              color: "#00E396",
              opacity: 1,
            },
          ],
          [
            {
              offset: 5,
              color: "white",
              opacity: 1,
            },
            {
              offset: 95,
              color: "#00E396",
              opacity: 1,
            },
          ],
          [
            {
              offset: 97,
              color: "white",
              opacity: 1,
            },
            {
              offset: 3,
              color: "#00E396",
              opacity: 1,
            },
          ],
          [
            {
              offset: 20,
              color: "white",
              opacity: 1,
            },
            {
              offset: 80,
              color: "#00E396",
              opacity: 1,
            },
          ],
          [
            {
              offset: 17,
              color: "white",
              opacity: 1,
            },
            {
              offset: 83,
              color: "#00E396",
              opacity: 1,
            },
          ],
          [
            {
              offset: 47,
              color: "white",
              opacity: 1,
            },
            {
              offset: 53,
              color: "#00E396",
              opacity: 1,
            },
          ],
        ],
      },
    },
    xaxis: {
      type: "number",
      min: 9,
      max: 18,
      tickAmount: 9,
    },
    yaxis: {
      show: true,
    },
    legend: {
      show: false,
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

export const ActivityTimelineChartGradient = (): JSX.Element => {
  return (
    <div id="chart">
      <ReactApexChart
        options={data.options as any}
        series={data.series}
        type="rangeBar"
        height={620}
      />
    </div>
  );
};

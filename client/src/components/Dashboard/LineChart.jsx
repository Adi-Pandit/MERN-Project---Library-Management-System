/* eslint-disable no-unused-vars */
import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = () => {
    const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Borrowed",
                backgroundColor: "rgb(73, 178, 78)",
                borderColor: "rgb(73, 178, 78)",
                data: [0, 10, 5, 2, 20, 30, 25],
                borderWidth: 2
            },
            {
                label: "Returned",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [10, 0, 5, 5, 10, 15, 20],
                borderWidth: 2
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false
                }
            }
        },
        tension: 0.4,
        elements: {
            point: {
                radius: 0
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Check-out statistics',
                align: 'start',
                color: "black",
                font: {
                    size: 13.6,
                    family: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
                },
            },
            legend: {
                fullWidth: false,
                align: 'end',
                labels: {
                    usePointStyle: true,
                    font: {
                        size: 10,
                        family: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"
                    },
                }
            }
        }

    }

    return (
        <div className="h-full">
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
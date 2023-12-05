// components/MonthlySignUpLineChart.tsx

import React from 'react';
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const lineData = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    datasets: [
        {
            label: '남자',
            data: [320, 280, 120, 220, 235, 300, 400, 320, 600, 270, 320, 500],
            fill: false,
            borderColor: 'rgb(54, 162, 235)',
            tension: 0.1
        },
        {
            label: '여자',
            data: [280, 290, 340, 124, 247, 370, 420, 220, 600, 600, 280, 400],
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
        }
    ],
};

const lineOptions = {
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: '월별 가입자 수',
        },
        datalabels: {
            display:false
        }
    },
};

const MonthlySignUpLineChart = () => {
    return <Line data={lineData} options={lineOptions}/>;
};

export default MonthlySignUpLineChart;

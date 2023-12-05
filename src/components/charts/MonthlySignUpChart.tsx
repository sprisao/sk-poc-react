// components/MonthlySignUpChart.tsx

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    datasets: [
        {
            label: '남성',
            data: [320, 280, 120, 220, 235, 300, 400, 320, 600, 270, 320, 500],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
        },
        {
            label: '여성',
            data: [280, 290, 340, 124, 247, 370, 420, 220, 600, 600, 280, 400],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};

const options = {
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: '월별 신규 가입자',
        },
        datalabels: {
            display:false
        }
    },
};

const MonthlySignUpChart = () => {
    return <Bar data={data} options={options} />;
};

export default MonthlySignUpChart;

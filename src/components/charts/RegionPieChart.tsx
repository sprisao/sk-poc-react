// components/RegionPieChart.tsx

import React from 'react';
import {Pie} from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const pieData = {
    labels: ['서울', '경기', '강원', '충북', '충남', '경북', '경남', '전북', '전남', '제주'],
    datasets: [
        {
            data: [657, 512, 460, 391, 488, 400, 300, 241, 402, 320],
            backgroundColor: [
                '#FFC0CB',
                '#B0E0E6',
                '#FFD700',
                '#FFA07A',
                '#FFB6C1',
                '#87CEFA',
                '#90EE90',
                '#FFDEAD',
                '#FFA500',
                '#D2B48C',
            ],
        },
    ],
};

const pieOptions : ChartOptions = {
    plugins: {
        datalabels: {
            color: '#fff',
            textAlign: 'right',
            font: {
                weight: 'bold',
            },
            formatter: (value, context) => {
                return context.chart.data.labels ? context.chart.data.labels[context.dataIndex] : '';
            },
        },
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: '지역별 가입자 수',
        },
    },
};

const RegionPieChart = () => {
    return <Pie data={pieData} options={pieOptions}/>;
};

export default RegionPieChart;
// components/RegionRadarChart.tsx

import React from 'react';
import {Radar} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    ChartOptions
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const radarData = {
    labels: ['서울', '경기', '강원', '충북', '충남', '경북', '경남', '전북', '전남', '제주'],
    datasets: [
        {
            data: [657, 512, 460, 391, 488, 400, 300, 241, 402, 320],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            label: '가입자 수',
        }
    ],
};

const radarOptions: ChartOptions = {
    elements: {
        line: {
            borderWidth: 3
        }
    },
    scales: {
        r: {
            angleLines: {
                display: false
            },
            suggestedMin: 200,
            suggestedMax: 700,
            ticks: {
                display: false
            }
        }
    },
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: '지역별 가입자 수'
        },
        datalabels: {
            display: false,
        }
    },

};

const RegionRadarChart = () => {
    // @ts-ignore
    return <Radar data={radarData} options={radarOptions}/>;
};

export default RegionRadarChart;

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { Chart as ChartJS } from 'chart.js/auto';

const LineChart = (props) => {
	const { months, borderColor, pointBorderColor } = props.data;
	const [userData, setUserData] = useState({
		labels: months.map((data) => data.month),

		datasets: [
			{
				label: '',
				data: months.map((data) => data.value),
				borderColor: borderColor,
				borderWidth: 2,
				pointRadius: 5,
				pointBorderWidth: 0.9,
				pointBorderColor: pointBorderColor,
				pointBackgroundColor: '#fff',
			},
		],
	});

	const options = {
		aspectRatio: 4,
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			y: {
				ticks: {
					min: 10,
					max: 50,
					stepSize: 10,
				},
				grid: {
					drawBorder: false,
				},
			},
			x: {
				grid: {
					display: false,
				},
			},
		},
	};

	return <Line data={userData} options={options} />;
};

LineChart.propTypes = {
	months: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			month: PropTypes.string.isRequired,
		}),
	),
	borderColor: PropTypes.string,
	pointBorderColor: PropTypes.string,
};

export default LineChart;

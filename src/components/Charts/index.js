import React from 'react';
import LineChart from './LineChart';
import Cards from '../Cards';
import { chartData } from '../../utils/chartData';
import EfficiencyGraphHeader from '../EfficiencyGraphHeader';
import { GraphContent, LeftContent, RightContent } from './styles';

const Charts = () => {
	return chartData.map((data, index) => (
		<GraphContent key={index}>
			<LeftContent>
				<EfficiencyGraphHeader data={data} />
				<LineChart data={data} />
			</LeftContent>
			<RightContent>
				<Cards data={data} />
			</RightContent>
		</GraphContent>
	));
};

export default Charts;

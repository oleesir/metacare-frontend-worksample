import React from 'react';
import PropTypes from 'prop-types';
import {
	GraphHeader,
	GraphHeaderLeft,
	ResponseTime,
	ResponseTimeValue,
	GraphHeaderRight,
	HighPriorityContent,
	HighPriorityText,
	HighPriorityColor,
	CalenderButton,
	CalenderText,
} from './styles';
export const EfficiencyGraphHeader = (props) => {
	const { title, highPriorityColor, responseTimeValue } = props.data;
	return (
		<GraphHeader>
			<GraphHeaderLeft>
				<ResponseTime>{title}</ResponseTime>
				<ResponseTimeValue>{responseTimeValue} </ResponseTimeValue>
			</GraphHeaderLeft>
			<GraphHeaderRight>
				<HighPriorityContent>
					<HighPriorityColor highPriorityColor={highPriorityColor} />
					<HighPriorityText>High Priority</HighPriorityText>
				</HighPriorityContent>
				<img src='/divider.svg' alt='divider' />
				<CalenderButton>
					<CalenderText>This Month</CalenderText>
					<img src='/calender.svg' alt='calender' />
				</CalenderButton>
			</GraphHeaderRight>
		</GraphHeader>
	);
};

EfficiencyGraphHeader.propTypes = {
	title: PropTypes.string,
	highPriorityColor: PropTypes.string,
	responseTimeValue: PropTypes.string,
};

export default EfficiencyGraphHeader;

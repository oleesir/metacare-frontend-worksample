import React from 'react';
import PropTypes from 'prop-types';
import { CardOne, CardTwo, TopText, BottomText } from './styles';

const Cards = (props) => {
	const { title, cardTitle } = props.data;
	return (
		<>
			<CardOne>
				<TopText>{title}</TopText>
				<BottomText>30 Mins</BottomText>
			</CardOne>
			<CardTwo>
				<TopText>{cardTitle}</TopText>
				<BottomText>1 Hour 30 Mins</BottomText>
			</CardTwo>
		</>
	);
};

Cards.propTypes = {
	title: PropTypes.string,
	cardTitle: PropTypes.string,
};

export default Cards;

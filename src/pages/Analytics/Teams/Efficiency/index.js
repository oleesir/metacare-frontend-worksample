import React from 'react';
import EfficiencyHeader from '../../../../components/EfficiencyHeader';
import Charts from '../../../../components/Charts';
import { Wrapper } from './styles';

const Efficiency = () => {
	return (
		<Wrapper>
			<EfficiencyHeader />
			<Charts />
		</Wrapper>
	);
};

export default Efficiency;

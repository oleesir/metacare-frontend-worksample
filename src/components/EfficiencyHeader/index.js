import React from 'react';
import {
	Wrapper,
	EfficiencyText,
	RightHeaderContent,
	InputContent,
	SearchInput,
	ButtonContent,
	ButtonLeft,
	ButtonRight,
	ButtonText,
} from './styles';

const EfficiencyHeader = () => {
	return (
		<Wrapper>
			<EfficiencyText>Efficiency Analytics</EfficiencyText>
			<RightHeaderContent>
				<InputContent>
					<img src='/search_icon.svg' alt='search icon' />
					<SearchInput type='text' placeholder='Search' />
				</InputContent>
				<ButtonContent>
					<ButtonLeft>
						<ButtonText>Filter Options</ButtonText>
						<img src='/drop_down.svg' alt='drop down' />
					</ButtonLeft>
					<img src='/divider.svg' alt='divider' />
					<ButtonRight>Export</ButtonRight>
				</ButtonContent>
			</RightHeaderContent>
		</Wrapper>
	);
};

export default EfficiencyHeader;

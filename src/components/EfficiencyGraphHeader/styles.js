import styled from 'styled-components';

export const LeftContent = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	padding-right: 24px;
`;

export const GraphHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 35px;
`;

export const GraphHeaderLeft = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const ResponseTime = styled.p`
	color: #060213;
	font-size: 18px;
	line-height: 26px;
	font-family: 'gelion-semi-bold';
	margin-right: 16px;
`;

export const ResponseTimeValue = styled.p`
	color: #25bb87;
	font-size: 12px;
	line-height: 20px;
	padding: 4px 12px;
	font-family: 'gelion-semi-bold';
	background-color: rgba(37, 187, 135, 0.1);
	border-radius: 4px;
`;

export const GraphHeaderRight = styled.div`
	display: flex;
`;

export const HighPriorityContent = styled.div`
	display: flex;
	align-items: center;
	margin-right: 16px;
`;

export const HighPriorityText = styled.p`
	color: #060213;
	font-size: 14px;
	line-height: 22px;
	font-weight: 500;
	margin-left: 8px;
`;

export const HighPriorityColor = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 2px;
	background-color: ${(props) => props.highPriorityColor};
`;

export const CalenderButton = styled.button`
	display: flex;
	align-items: center;
	padding: 8px 16.67px 8px 16px;
	border-radius: 8px;
	background-color: inherit;
	border: 1px solid #e1e1eb;
	cursor: pointer;
	margin-left: 16px;
`;

export const CalenderText = styled.p`
	color: #060213;
	font-size: 14px;
	line-height: 22px;
	margin-right: 5px;
`;

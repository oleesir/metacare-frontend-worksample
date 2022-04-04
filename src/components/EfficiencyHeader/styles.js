import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 32px;
`;

export const EfficiencyText = styled.p`
	font-size: 24px;
	line-height: 38.4px;
  color:#060213;
  font-family:'gelion-semi-bold'
  font-style:bold;
  font-weight:600;
	display: flex;
	justify-content: space-between; 
`;

export const RightHeaderContent = styled.div`
	display: flex;
	align-items: center;
`;

export const InputContent = styled.div`
	width: 441px;
	display: flex;
	padding: 10px 18px;
	background-color: #fff;
	border: 1px solid #e1e1eb;
	border-radius: 8px;
`;

export const SearchInput = styled.input`
	width: 100%;
	font-size: 16px;
	line-height: 24px;
	margin-left: 19.33px;
	background-color: #fff;
	border: none;
	::placeholder {
		color: #a3a3c2;
	}
	&:focus {
		outline: none;
	}
`;

export const ButtonContent = styled.div`
	display: flex;
	align-items: center;
	margin-left: 24px;
`;

export const ButtonLeft = styled.button`
	display: flex;
	align-items: center;
	padding: 10px 19.5px 10px 16px;
	border-radius: 8px;
	background-color: inherit;
	border: 1px solid #e1e1eb;
	cursor: pointer;
	margin-right: 16px;
`;

export const ButtonRight = styled.button`
	display: flex;
	color: #fff;
	padding: 10px 29.5px;
	align-items: center;
	border-radius: 8px;
	background-color: inherit;
	margin-left: 16px;
	font-size: 16px;
	line-height: 24px;
	cursor: pointer;
	border: none;
	background-color: #25bb87;
`;

export const ButtonText = styled.p`
	font-size: 16px;
	line-height: 24px;
	color: #060213;
	margin-right: 19.5px;
`;

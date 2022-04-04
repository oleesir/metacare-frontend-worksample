import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	padding: 16px 0px 0px 39px;
	align-items: center;
	border-bottom: 1px solid #ecebf5;
`;

export const TabLinksContent = styled.div`
	display: flex;
	align-items: center;
`;

export const TabLinks = styled(Link)`
	color: #696d8c;
	display: flex;
	justify-content: center;
	font-size: 16px;
	line-height: 24px;
	margin-right: 40px;
	cursor: pointer;
	padding-bottom: 17px;
	text-decoration: none;
	color: ${(props) => (props.location === props.to ? '#060213' : '#696d8c')};
	border-bottom: ${(props) => (props.location === props.to ? ' 2px solid #6837EF' : '')};
`;

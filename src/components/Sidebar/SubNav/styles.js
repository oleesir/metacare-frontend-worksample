import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideBarLinkContent = styled.div`
	margin-bottom: 26px;
	cursor: pointer;
`;

export const Icon = styled.span`
	margin-top: 5px;
	&:hover {
		color: #6837ef;
		cursor: pointer;
	}
`;

export const ItemName = styled.span`
	font-size: 16px;
	line-height: 24px;
	margin-left: 16.75px;
	&:hover {
		color: #6837ef;
		cursor: pointer;
	}
`;

export const SideBarLink = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	margin-bottom: 12px;
	&:hover {
		color: #6837ef;
		cursor: pointer;
	}
`;

export const SideBarLinkLeft = styled.div`
	color: ${(props) => (props.isactive ? '#6837EF' : '#696d8c')};
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;

	${Icon} {
		color: ${(props) => (props.isactive ? '#6837EF' : '#696d8c')};
	}

	${ItemName} {
		color: ${(props) => (props.isactive ? '#6837EF' : '#696d8c')};
	}

	&:hover {
		color: #6837ef;
		cursor: pointer;

		${Icon} {
			color: #6837ef;
			cursor: pointer;
		}

		${ItemName} {
			color: #6837ef;
			cursor: pointer;
		}
	}
`;
export const DropdownMenuContent = styled.div`
	display: flex;
	flex-direction: column;
`;

export const DropdownMenu = styled(Link)`
	color: #696d8c;
	font-size: 16px;
	line-height: 24px;
	margin-bottom: 10px;
	cursor: pointer;
	padding-left: 20px;
	text-decoration: none;
	color: ${(props) => (props.location === props.to ? '#060213' : '#696d8c')};
	border-left: ${(props) => (props.location === props.to ? '1px solid #ecebf5' : '')};

	&:hover {
		border-left: 1px solid #ecebf5;
		color: #060213;
	}
`;

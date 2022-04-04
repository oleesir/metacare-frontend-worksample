import styled from 'styled-components';

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 12px 56px 12px 40px;
	border-bottom: 1px solid #ecebf5;
`;

export const InputContent = styled.div`
	width: 441px;
	display: flex;
	padding: 12px 16px 13px 18px;
	background-color: #fafafc;
	border-radius: 10px;
`;

export const SearchInput = styled.input`
	width: 100%;
	font-size: 16px;
	line-height: 29px;
	background-color: #fafafc;
	border: none;
	::placeholder {
		color: #a3a3c2;
	}
	&:focus {
		outline: none;
	}
`;

export const ProfileContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 11px 20px 11px 20.22px;
	border-radius: 8px;
	border: 1px solid #ecebf5;
`;

export const ProfileContentLeft = styled.button`
	display: flex;
	align-items: center;
	background: inherit;
	margin-right: 24px;
	border: none;
	cursor: pointer;
`;

export const ProfileContentRight = styled.button`
	display: flex;
	align-items: center;
	background: inherit;
	margin-left: 24px;
	border: none;
	cursor: pointer;
`;

export const Circle = styled.div`
	width: 32px;
	height: 32px;
	border-radius: 50px;
	margin-right: 12px;
	border: 1px solid #6837ef;
`;

export const NumbersOfNotifications = styled.div`
	padding: 2px 4px 3px 5px;
	background-color: #f25a68;
	color: #fff;
	border-radius: 4px;
	margin-left: 6.25px;
`;

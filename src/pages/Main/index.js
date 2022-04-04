import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { Wrapper, ContentWrapper } from './styles';

const MainPage = () => {
	return (
		<Wrapper>
			<Sidebar />
			<ContentWrapper>
				<Header />
				<Outlet />
			</ContentWrapper>
		</Wrapper>
	);
};

export default MainPage;

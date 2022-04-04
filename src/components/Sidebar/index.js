import React from 'react';
import { sidebarData } from '../../utils/sidebarData';
import SubNav from './SubNav';
import { NavWrapper, EmailContent, UserEmail, CompanyName, NavItems } from './styles';

const Sidebar = () => {
	return (
		<NavWrapper>
			<EmailContent>
				<CompanyName>Metacare</CompanyName>
				<UserEmail>adeyinka@metacare.app</UserEmail>
			</EmailContent>
			<NavItems>
				{sidebarData.map((item, index) => {
					return <SubNav item={item} key={index} />;
				})}
			</NavItems>
		</NavWrapper>
	);
};

export default Sidebar;

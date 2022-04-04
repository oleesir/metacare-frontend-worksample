import React from 'react';
import { useLocation } from 'react-router-dom';
import { tabLinks } from '../../utils/teamsLinks';
import { Wrapper, TabLinksContent, TabLinks } from './styles';
const TabHeader = () => {
	let location = useLocation();
	return (
		<Wrapper>
			{tabLinks.map((item, index) => {
				return (
					<TabLinksContent key={index}>
						<TabLinks to={item.path} location={location.pathname}>
							{item.name}
						</TabLinks>
					</TabLinksContent>
				);
			})}
		</Wrapper>
	);
};

export default TabHeader;

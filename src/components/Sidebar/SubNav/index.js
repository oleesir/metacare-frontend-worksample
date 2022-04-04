import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
	SideBarLink,
	ItemName,
	SideBarLinkLeft,
	DropdownMenuContent,
	DropdownMenu,
	SideBarLinkContent,
	Icon,
} from './styles';

const SubNav = (props) => {
	const { subNav, icon, navItem, iconClose, iconOpen } = props.item;

	let location = useLocation();
	const [isOpen, setIsOpen] = useState(false);
	const [isActive, setIsActive] = useState(false);

	const showSubNav = () => {
		setIsOpen(!isOpen);
		setIsActive(!isActive);
	};

	return (
		<SideBarLinkContent>
			<SideBarLink onClick={subNav && showSubNav}>
				<SideBarLinkLeft isactive={isActive}>
					<Icon>{icon}</Icon>
					<ItemName>{navItem}</ItemName>
				</SideBarLinkLeft>
				{subNav && isOpen ? iconClose : subNav ? iconOpen : null}
			</SideBarLink>
			{isOpen &&
				subNav.map((item, index) => {
					return (
						<DropdownMenuContent>
							<DropdownMenu to={item.path} key={index} location={location.pathname}>
								{item.navItem}
							</DropdownMenu>
						</DropdownMenuContent>
					);
				})}
		</SideBarLinkContent>
	);
};
SubNav.propTypes = {
	subNav: PropTypes.arrayOf(
		PropTypes.shape({
			navItem: PropTypes.string.isRequired,
			icon: PropTypes.element.isRequired,
			iconOpen: PropTypes.element.isRequired,
			iconClose: PropTypes.element.isRequired,
		}),
	),
};

export default SubNav;

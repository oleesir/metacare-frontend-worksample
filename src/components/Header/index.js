import React from 'react';
import {
	Circle,
	Content,
	SearchInput,
	InputContent,
	ProfileContent,
	ProfileContentLeft,
	ProfileContentRight,
	NumbersOfNotifications,
} from './styles';

export const Header = () => {
	return (
		<Content>
			<InputContent>
				<SearchInput type='text' placeholder='Ask us any question' />
				<img src='/search_icon.svg' alt='search icon' />
			</InputContent>
			<ProfileContent>
				<ProfileContentLeft>
					<img src='/notification.svg' alt='notification' /> <NumbersOfNotifications>3</NumbersOfNotifications>
				</ProfileContentLeft>
				<img src='/divider.svg' alt='divider' />
				<ProfileContentRight>
					<Circle />
					<img src='/drop_down.svg' alt='drop down' />
				</ProfileContentRight>
			</ProfileContent>
		</Content>
	);
};

export default Header;

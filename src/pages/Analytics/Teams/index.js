import React from 'react';
import { Outlet } from 'react-router-dom';
import TabHeader from '../../../components/TabHeader';

const Teams = () => {
	return (
		<div>
			<TabHeader />
			<Outlet />
		</div>
	);
};

export default Teams;

import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

const Empty = (props) => {
	const { name, hasSubnav } = props;
	return (
		<div>
			<h1>{name}</h1>
			{hasSubnav && <Outlet />}
		</div>
	);
};

Empty.propTypes = {
	name: PropTypes.string.isRequired,
	hasSubnav: PropTypes.bool.isRequired,
};

export default Empty;

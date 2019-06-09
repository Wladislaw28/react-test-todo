import React from 'react';
import PropTypes from 'prop-types';

import './Footer.css';

const FILTERS_BTN = [
	{
		text: 'All',
		id: 'all'
	},
	{
		text: 'Active',
		id: 'active'
	},
	{
		text: 'Completed',
		id: 'completed'
	}
];

const Footer = ({amount, activeFilter, changeFilter}) => (
	<div className="footer">
		<span className="amount">{`${amount} Task left`}</span>
		<div className="btn-group">
			{FILTERS_BTN.map(({id, text}) =>
				<button onClick={() => {changeFilter(id)}} key={id}
						className={id === activeFilter ? "filter-btn active" : 'filter-btn'}>
					{text}</button>
			)}
		</div>
	</div>
);

Footer.propTypes  = {
	amount: PropTypes.number, //кол-во задач
	activeFilter: PropTypes.string, //активн фильтр
	changeFilter: PropTypes.func
};

Footer.defaulProps = {
	amount: 0,
	activeFilter: 'all',
	changeFilter: () => {},
};

export default Footer;

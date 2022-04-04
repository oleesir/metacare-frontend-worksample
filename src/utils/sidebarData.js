import Admin from '../components/Icons/Admin';
import AgentInbox from '../components/Icons/AgentInbox';
import HelpCenter from '../components/Icons/HelpCenter';
import Train from '../components/Icons/Train';
import Analytics from '../components/Icons/Analytics';
import IconClose from '../components/Icons/IconClose';
import IconOpen from '../components/Icons/IconOpen';

export const sidebarData = [
	{
		navItem: 'Admin',
		icon: <Admin />,
		iconOpen: <IconOpen />,
		iconClose: <IconClose />,
		subNav: [{ navItem: 'Main', path: '/admin/main' }],
	},
	{
		navItem: 'Knowledge Base',
		icon: <Train />,
		iconOpen: <IconOpen />,
		iconClose: <IconClose />,
		subNav: [{ navItem: 'Main', path: '/knowledge_base/main' }],
	},
	{
		navItem: 'Train SAM',
		icon: <Train />,
		iconOpen: <IconOpen />,
		iconClose: <IconClose />,
		subNav: [{ navItem: 'Main', path: '/train_sam/main' }],
	},
	{
		navItem: 'Agent Inbox',
		icon: <AgentInbox />,
		iconOpen: <IconOpen />,
		iconClose: <IconClose />,
		subNav: [{ navItem: 'Main', path: '/agent_inbox/main' }],
	},
	{
		navItem: 'Help Center',
		icon: <HelpCenter />,
		iconOpen: <IconOpen />,
		iconClose: <IconClose />,
		subNav: [{ navItem: 'Main', path: '/help_center/main' }],
	},
	{
		navItem: 'Analytics',
		icon: <Analytics />,
		iconOpen: <IconOpen />,
		iconClose: <IconClose />,
		subNav: [
			{ navItem: 'Teams', path: '/analytics/teams/efficiency' },
			{ navItem: 'Knowledge Base', path: '/analytics/knowledge_base' },
			{ navItem: 'Training SAM', path: '/analytics/training_sam' },
			{ navItem: 'Help Center', path: '/analytics/help_center' },
		],
	},
];

import { User } from '../models/user';

export const USERS: User[] = [
	{
		_id: 1000,
		name: {
			first: 'john',
			middle: 'k',
			last: 'smith',
			suffix: ''
		},
		email: 'john@localhost',
		password: 'secure',
		roles: [
			'admin'
		]
	},
	{
		_id: 1001,
		name: {
			first: 'sam',
			middle: 'j',
			last: 'hamgy',
			suffix: 'jr'
		},
		email: 'sam@localhost',
		password: 'verysecure',
		roles: [
			'user'
		]
	},
];

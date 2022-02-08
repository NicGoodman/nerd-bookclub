import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/NicGoodman/nerd-bookclub.git', // Update to point to your repository
		user: {
			name: 'Nic Goodman', // update to use your name
			email: 'nic.goodman@hey.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);

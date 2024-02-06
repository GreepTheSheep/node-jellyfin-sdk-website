import semver from 'semver';

import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs']);
export default new DocsSource({
	id: 'main',
	name: 'Main library',
	global: 'Jellyfin',
	repo: 'GreepTheSheep/node-jellyfin-sdk',
	defaultTag: 'main',
	branchFilter: (branch: string) =>
		!branchBlacklist.has(branch) && !branch.startsWith('dependabot/') && !branch.startsWith('depfu/'),
	tagFilter: (tag: string) => semver.gte(tag.replace(/^v/, ''), '0.0.0'),
});

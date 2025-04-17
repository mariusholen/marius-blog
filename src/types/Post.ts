export type PostFrontmatter = {
	layout: string;
	title: string;
	pubDate: string;
	description: string;
	author: string;
	tags: string[];
	draft?: boolean;
};

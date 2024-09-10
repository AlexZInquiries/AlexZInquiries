import { Layouts } from "react-grid-layout";

export const layouts: Record<string, Layouts> = {

	about: {
		lg: [
			{ i: "avatar", x: 0, y: 0, w: 2, h: 2 },
			{ i: "education", x: 2, y: 0, w: 2, h: 1.4 },
			{ i: "industryExperience", x: 2, y: 4, w: 2, h: 0.9 },
			{ i: "creativeExperience", x: 2, y: 7, w: 2, h: 1.7 },
			{ i: "themeSwitch", x: 0, y: 3, w: 1, h: 2 },
			{ i: "iconCloud", x: 1, y: 3, w: 1, h: 2 },

		],
		md: [

		],
		sm: [

		],
		xs: [

		],
		xxs: [

		],
	},

	research: {

	},

	publications: {
		lg: [
			{ i: "journalArticles", x: 0, y: 0, w: 4, h: 0.85 },
			{ i: "performances", x: 0, y: 1, w: 4, h: 0.85 },
			{ i: "invitedTalks", x: 0, y: 2, w: 4, h: 1.15 },
			{ i: "books", x: 0, y: 3.5, w: 4, h: 0.7 },
			{ i: "translations", x: 0, y: 4.5, w: 4, h: 0.85 },
			{ i: "mediaProduction", x: 0, y: 5.5, w: 4, h: 0.7 },
		],
		md: [

		],
		sm: [

		],
		xs: [

		],
		xxs: [

		],
	},

	projects: {
		lg: [
			{ i: "multimeter", x: 0, y: 0, w: 2, h: 2 },
		],
		md: [

		],
		sm: [
		
		],
		xs: [
		
		],
		xxs: [
		
		],
	},
};

export const selectedCard: Record<string, Record<string, boolean>> = {
	about: {
		avatar: true,
		themeSwitch: true,
		iconCloud: true,
		education: true,
		industryExperience: true,
		creativeExperience: true,
	},
	research: {

	},
	publications: {
		journalArticles: true,
		performances: true,
		invitedTalks: true,
		books: true,
		translations: true,
		mediaProduction: true,
	},
	projects: {
		multimeter: true,
	},
};

import { Layouts } from "react-grid-layout";

export const layouts: Record<string, Layouts> = {

	about: {
		lg: [
			{ i: "avatar", x: 0, y: 0, w: 2, h: 2 },
			{ i: "education", x: 2, y: 0, w: 2, h: 1.3 },
			{ i: "industryExperience", x: 2, y: 1.3, w: 2, h: 0.9 },
			{ i: "creativeExperience", x: 2, y: 2.2, w: 2, h: 1.8 },
			{ i: "themeSwitch", x: 0, y: 2, w: 1, h: 2 },
			{ i: "iconCloud", x: 1, y: 2, w: 1, h: 2 },
		],
		md: [
			// Add responsive layouts for md if needed
		],
		sm: [
			// Add responsive layouts for sm if needed
		],
		xs: [
			// Add responsive layouts for xs if needed
		],
		xxs: [
			// Add responsive layouts for xxs if needed
		],
	},

	research: {
		lg: [
			{ i: "ethnomusicology", x: 0, y: 2, w: 2, h: 2 },
			{ i: "vtmp", x: 2, y: 2, w: 2, h: 2 },
			{ i: "boulez", x: 0, y: 0, w: 2, h: 2 },
			{ i: "deep-drawing", x: 2, y: 0, w: 2, h: 2 },
		],
		// Add other breakpoints if needed
	},

	publications: {
		lg: [
			{ i: "journalArticles", x: 0, y: 0, w: 4, h: 0.85 },
			{ i: "performances", x: 0, y: 0.85, w: 4, h: 0.85 },
			{ i: "invitedTalks", x: 0, y: 1.7, w: 4, h: 1.15 },
			{ i: "books", x: 0, y: 2.85, w: 4, h: 0.7 },
			{ i: "translations", x: 0, y: 3.55, w: 4, h: 0.85 },
			{ i: "mediaProduction", x: 0, y: 4.4, w: 4, h: 0.85 },
		],
		// Add other breakpoints if needed
	},

	projects: {
		lg: [
			{ i: "multimeter", x: 0, y: 0, w: 2, h: 2 },
			{ i: "improvisationTutor", x: 2, y: 0, w: 2, h: 2 },
		],
		// Add other breakpoints if needed
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
		ethnomusicology: true,
		vtmp: true,
		boulez: true,
		'deep-drawing': true,
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
		improvisationTutor: true,
	},
};

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
			{ i: "publications", x: 0, y: 0, w: 4, h: 1.35 },
			{ i: "translations", x: 0, y: 2, w: 4, h: 0.9 },
			{ i: "invitedTalks", x: 0, y: 4, w: 4, h: 1.2 },
			{ i: "mediaProduction", x: 0, y: 6, w: 4, h: 0.9 },
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
		publications: true,
		translations: true,
		invitedTalks: true,
		mediaProduction: true,
	},
	projects: {
		multimeter: true,
	},
};

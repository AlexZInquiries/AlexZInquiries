import { Layouts } from "react-grid-layout";

export const layouts: Record<string, Layouts> = {

	about: {
		lg: [
			{ i: "avatar", x: 0, y: 0, w: 2, h: 2 }, // Fixed
			{ i: "education", x: 2, y: 0, w: 2, h: 1.5 }, // Fixed
			{ i: "professionalExperience", x: 2, y: 1.5, w: 2, h: 2.5 }, // Fixed
			{ i: "themeSwitch", x: 0, y: 3, w: 1, h: 2 }, // Fixed
			{ i: "iconCloud", x: 1, y: 3, w: 1, h: 2 }, // Fixed

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
		professionalExperience: true,
	},
	research: {

	},
	publications: {

	},
	projects: {
		multimeter: true,
	},
};

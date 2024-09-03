import { Layouts } from "react-grid-layout";

export const layouts: Record<string, Layouts> = {

	about: {
		lg: [
			{ i: "avatar", x: 0, y: 0, w: 2, h: 2 }, // Fixed
			{ i: "education", x: 2, y: 0, w: 2, h: 2 }, // Fixed
			{ i: "professionalExperience", x: 2, y: 2, w: 2, h: 2 }, // Fixed
			{ i: "themeSwitch", x: 0, y: 3, w: 1, h: 2 }, // Fixed
			{ i: "iconCloud", x: 1, y: 3, w: 1, h: 2 }, // Fixed
			// { i: "animatedEmoji", x: 2, y: 2, w: 1, h: 2 }, // To be fixed
			// { i: "webAgent", x: 3, y: 0, w: 1, h: 4 },
			// { i: "chatBot", x: 0, y: 2, w: 2, h: 2 },
			// { i: "actions", x: 3, y: 2, w: 2, h: 2 },
			// { i: "paper", x: 0, y: 3, w: 1, h: 2 },
		],
		md: [
			{ i: "avatar", x: 0, y: 0, w: 2, h: 2 },
			{ i: "iconCloud", x: 1, y: 1, w: 1, h: 2 },
			{ i: "themeSwitch", x: 1, y: 2, w: 1, h: 2 },
			{ i: "animatedEmoji", x: 2, y: 2, w: 1, h: 2 },
			{ i: "webAgent", x: 3, y: 0, w: 1, h: 4 },
			{ i: "chatBot", x: 0, y: 2, w: 2, h: 2 },
			{ i: "actions", x: 3, y: 2, w: 2, h: 2 },
			{ i: "paper", x: 0, y: 3, w: 1, h: 2 },
		],
		sm: [
			{ i: "avatar", x: 0, y: 0, w: 2, h: 2 },
			{ i: "themeSwitch", x: 0, y: 6, w: 1, h: 1 },
			{ i: "iconCloud", x: 0, y: 2, w: 1, h: 1 },
			{ i: "chatBot", x: 0, y: 7, w: 2, h: 1 },
			{ i: "animatedEmoji", x: 0, y: 4, w: 2, h: 2 },
			{ i: "webAgent", x: 1, y: 5, w: 1, h: 2 },
			{ i: "paper", x: 0, y: 6, w: 1, h: 1 },
			{ i: "actions", x: 0, y: 8, w: 2, h: 1 },
		],
		xs: [
			{ i: "avatar", x: 0, y: 0, w: 2, h: 2 },
			{ i: "themeSwitch", x: 0, y: 6, w: 1, h: 1 },
			{ i: "iconCloud", x: 0, y: 2, w: 1, h: 1 },
			{ i: "chatBot", x: 0, y: 7, w: 2, h: 1 },
			{ i: "animatedEmoji", x: 0, y: 4, w: 2, h: 2 },
			{ i: "webAgent", x: 1, y: 5, w: 1, h: 2 },
			{ i: "paper", x: 0, y: 6, w: 1, h: 1 },
			{ i: "actions", x: 0, y: 8, w: 2, h: 1 },
		],
		xxs: [
			{ i: "avatar", x: 0, y: 0, w: 2, h: 2 },
			{ i: "themeSwitch", x: 0, y: 6, w: 1, h: 1 },
			{ i: "iconCloud", x: 0, y: 2, w: 1, h: 1 },
			{ i: "chatBot", x: 0, y: 7, w: 2, h: 1 },
			{ i: "animatedEmoji", x: 0, y: 4, w: 2, h: 2 },
			{ i: "webAgent", x: 1, y: 5, w: 1, h: 2 },
			{ i: "paper", x: 0, y: 6, w: 1, h: 1 },
			{ i: "actions", x: 0, y: 8, w: 2, h: 1 },
		],
	},

	// To be fixed
	collaborations: {},
	publications: {},

	projects: {
		lg: [
			// { i: "chatBot", x: 1, y: 0, w: 2, h: 2 },
			// { i: "animatedEmoji", x: 3, y: 0, w: 1, h: 2 },
			// { i: "webAgent", x: 0, y: 0, w: 1, h: 4 },
			// { i: "paper", x: 1, y: 1, w: 1, h: 2 },
			// { i: "actions", x: 2, y: 1, w: 2, h: 2 },
			// { i: "avatar", x: 0, y: 2, w: 2, h: 2 },
			// { i: "iconCloud", x: 3, y: 3, w: 1, h: 2 },
			// { i: "themeSwitch", x: 1, y: 3, w: 1, h: 2 },
			{ i: "multimeter", x: 0, y: 0, w: 2, h: 2 },
		],
		md: [
			{ i: "chatBot", x: 1, y: 0, w: 2, h: 2 },
			{ i: "animatedEmoji", x: 3, y: 0, w: 2, h: 2 },
			{ i: "webAgent", x: 0, y: 0, w: 1, h: 4 },
			{ i: "paper", x: 1, y: 1, w: 1, h: 2 },
			{ i: "actions", x: 2, y: 1, w: 2, h: 2 },
			{ i: "avatar", x: 0, y: 2, w: 2, h: 2 },
			{ i: "iconCloud", x: 3, y: 3, w: 1, h: 2 },
			{ i: "themeSwitch", x: 1, y: 3, w: 1, h: 2 },
		],
		sm: [
			{ i: "avatar", x: 0, y: 5, w: 2, h: 2 },
			{ i: "animatedEmoji", x: 0, y: 0, w: 2, h: 2 },
			{ i: "themeSwitch", x: 1, y: 4, w: 1, h: 1 },
			{ i: "actions", x: 0, y: 1, w: 2, h: 1 },
			{ i: "paper", x: 1, y: 3, w: 1, h: 1 },
			{ i: "chatBot", x: 0, y: 2, w: 2, h: 1 },
			{ i: "iconCloud", x: 0, y: 8, w: 1, h: 1 },
			{ i: "webAgent", x: 0, y: 3, w: 1, h: 2 },
		],
		xs: [
			{ i: "avatar", x: 0, y: 5, w: 2, h: 2 },
			{ i: "animatedEmoji", x: 0, y: 0, w: 2, h: 2 },
			{ i: "themeSwitch", x: 1, y: 4, w: 1, h: 1 },
			{ i: "actions", x: 0, y: 1, w: 2, h: 1 },
			{ i: "paper", x: 1, y: 3, w: 1, h: 1 },
			{ i: "chatBot", x: 0, y: 2, w: 2, h: 1 },
			{ i: "iconCloud", x: 0, y: 8, w: 1, h: 1 },
			{ i: "webAgent", x: 0, y: 3, w: 1, h: 2 },
		],
		xxs: [
			{ i: "avatar", x: 0, y: 5, w: 2, h: 2 },
			{ i: "animatedEmoji", x: 0, y: 0, w: 2, h: 2 },
			{ i: "themeSwitch", x: 1, y: 4, w: 1, h: 1 },
			{ i: "actions", x: 0, y: 1, w: 2, h: 1 },
			{ i: "paper", x: 1, y: 3, w: 1, h: 1 },
			{ i: "chatBot", x: 0, y: 2, w: 2, h: 1 },
			{ i: "iconCloud", x: 0, y: 8, w: 1, h: 1 },
			{ i: "webAgent", x: 0, y: 3, w: 1, h: 2 },
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
		// animatedEmoji: true,
		// webAgent: true,
		// chatBot: true,
		// actions: true,
		// paper: true,
	},
	publications: {

	},
	projects: {
		multimeter: true,
	},
};

import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, rubber, snap, springy } from "../helpers.ts";

const tilt = pose(
	{ y: [0, -1.8, 0], rotate: [0, -9.6, 0] },
	{ duration: 0.75, times: [0, 0.22, 1], ease: [snap, rubber] },
);
const sniff = pose(
	{ y: [0, -0.9, 0], scale: [1, 1.48, 1] },
	{ duration: 0.6, delay: 0.1, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "dog",
	render: (part) => (
		<motion.g {...part(tilt)} style={pivot(12, 21)}>
			<motion.path {...part(sniff)} d="M11.25 16.25h1.5L12 17z" style={centered} />
			<path d="M16 14v.5" />
			<path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309" />
			<path d="M8 14v.5" />
			<path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
		</motion.g>
	),
});

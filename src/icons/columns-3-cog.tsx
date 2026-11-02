import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const shift = (x: number, delay: number) =>
	pose({ x: [0, x, 0] }, { duration: 0.65, delay, times: [0, 0.25, 1], ease: [snap, springy] });
const turn = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "columns-3-cog",
	render: (part) => (
		<>
			<path d="M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" />
			<motion.path {...part(shift(-4, 0))} d="M9 3v18" />
			<motion.path {...part(shift(3, 0.05))} d="M15 3v7.5" />
			<motion.g {...part(turn)} style={pivot(18, 18)}>
				<path d="m14.3 19.6 1-.4" />
				<path d="m15.2 16.9-.9-.3" />
				<path d="m16.6 21.7.3-.9" />
				<path d="m16.8 15.3-.4-1" />
				<path d="m19.1 15.2.3-.9" />
				<path d="m19.6 21.7-.4-1" />
				<path d="m20.7 16.8 1-.4" />
				<path d="m21.7 19.4-.9-.3" />
				<circle cx="18" cy="18" r="3" />
			</motion.g>
		</>
	),
});

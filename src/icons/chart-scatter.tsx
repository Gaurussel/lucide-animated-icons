import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const scatter = (x: number, y: number, delay: number) =>
	pose(
		{ x: [0, 0, x, 0], y: [0, 1.5, y, 0] },
		{ duration: 0.6, delay, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
	);
const axis = pose(
	{ x: [0, 0, -0.9, 0], y: [0, 0, 0.9, 0] },
	{ duration: 0.7, times: [0, 0.35, 0.5, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "chart-scatter",
	render: (part) => (
		<>
			<motion.circle {...part(scatter(-1, -4, 0))} cx="7.5" cy="7.5" fill="currentColor" r=".5" />
			<motion.circle {...part(scatter(2, -3, 0.15))} cx="18.5" cy="5.5" fill="currentColor" r=".5" />
			<motion.circle {...part(scatter(1, -4, 0.07))} cx="11.5" cy="11.5" fill="currentColor" r=".5" />
			<motion.circle {...part(scatter(-1, -4, 0.02))} cx="7.5" cy="16.5" fill="currentColor" r=".5" />
			<motion.circle {...part(scatter(2, -4, 0.12))} cx="17.5" cy="14.5" fill="currentColor" r=".5" />
			<motion.path {...part(axis)} d="M3 3v16a2 2 0 0 0 2 2h16" />
		</>
	),
});

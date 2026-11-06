import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, springy } from "../helpers.ts";

const slideIn = (delay: number) =>
	pose(
		{ pathLength: [1, 0, 1], x: [0, -3, 0] },
		{ duration: 0.45, delay, times: [0, 0.01, 1], ease: ["easeInOut", springy] },
	);
const dropIn = (delay: number) =>
	pose(
		{ pathLength: [1, 0, 1], y: [0, -3, 0] },
		{ duration: 0.45, delay, times: [0, 0.01, 1], ease: ["easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "table",
	render: (part) => (
		<>
			<motion.path {...part(dropIn(0.2))} d="M12 3v18" />
			<motion.rect {...part(jelly(0.55, 0.75))} height="18" rx="2" style={edge(0.5, 1)} width="18" x="3" y="3" />
			<motion.path {...part(slideIn(0))} d="M3 9h18" />
			<motion.path {...part(slideIn(0.08))} d="M3 15h18" />
		</>
	),
});

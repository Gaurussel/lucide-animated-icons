import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, redraw, springy } from "../helpers.ts";

const stem = (delay: number) =>
	pose(
		{ pathLength: [1, 0, 1], y: [0, -5, 0] },
		{ duration: 0.45, delay, times: [0, 0.01, 1], ease: ["easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "square-pilcrow",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.55, 0.75))} height="18" rx="2" style={edge(0.5, 1)} width="18" x="3" y="3" />
			<motion.path {...part(redraw(0, 0.4))} d="M12 12H9.5a2.5 2.5 0 0 1 0-5H17" />
			<motion.path {...part(stem(0.18))} d="M12 7v10" />
			<motion.path {...part(stem(0.26))} d="M16 7v10" />
		</>
	),
});

import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const dash = (lag: number) =>
	pose(
		{ x: [0, 1.08, -4.62, 3.78, -0.6, 0], y: [0, 1.08, -4.62, 3.78, -0.6, 0], opacity: [1, 1, 0, 0, 1, 1] },
		{
			duration: 0.7,
			times: [0, 0.16, 0.32 + lag, 0.33 + lag, 0.55 + lag, 1],
			ease: ["easeInOut", "easeIn", "easeInOut", "easeOut", springy],
		},
	);
const trail = pose(
	{ pathLength: [1, 1, 0.3, 1] },
	{ duration: 0.7, times: [0, 0.16, 0.3, 1], ease: ["easeInOut", "easeIn", snap] },
);

export default createAnimatedIcon({
	name: "move-up-left",
	render: (part) => (
		<>
			<motion.g {...part(dash(0.08))}>
				<motion.path {...part(trail)} d="M5 5L19 19" />
			</motion.g>
			<motion.path {...part(dash(0))} d="M5 11V5H11" />
		</>
	),
});

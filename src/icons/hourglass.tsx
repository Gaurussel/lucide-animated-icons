import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, redraw, springy } from "../helpers.ts";

const flip = pose(
	{ rotate: [0, -20, 180, 180, 360] },
	{
		duration: 0.75,
		times: [0, 0.1, 0.32, 0.5, 1],
		ease: ["easeInOut", "easeInOut", "easeInOut", springy],
		reset: true,
	},
);

export default createAnimatedIcon({
	name: "hourglass",
	render: (part) => (
		<motion.g {...part(flip)} style={pivot(12, 12)}>
			<motion.path {...part(jelly(0.32, 0.75))} d="M5 22h14" style={edge(0.5, 1)} />
			<motion.path {...part(jelly(0.32, 0.75))} d="M5 2h14" style={edge(0.5, 0)} />
			<path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
			<motion.path
				{...part(redraw(0.24, 0.3))}
				d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"
			/>
		</motion.g>
	),
});

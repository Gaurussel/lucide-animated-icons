import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const arc = (delay: number) =>
	pose({ y: [0, -2.5, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const scribble = pose(
	{ x: [0, -2, 2, -1, 0], y: [0, -1, 1, 0, 0], rotate: [0, -12, 8, -6, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.3, 0.45, 1], ease: ["easeInOut", "easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "wifi-pen",
	render: (part) => (
		<>
			<motion.path {...part(arc(0))} d="M8.5 16.429a5 5 0 0 1 3-1.406" />
			<motion.path {...part(arc(0.06))} d="M5 12.859a10 10 0 0 1 10.5-2.222" />
			<motion.path {...part(arc(0.12))} d="M2 8.82a15 15 0 0 1 20 0" />
			<motion.path
				{...part(scribble)}
				d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
				style={pivot(13.5, 21)}
			/>
		</>
	),
});

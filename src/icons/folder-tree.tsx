import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, redraw, springy } from "../helpers.ts";

const sprout = (delay: number) =>
	pose(
		{ x: [0, -2.4, 0], scale: [1, 0.7, 1] },
		{ duration: 0.5, delay, times: [0, 0.2, 1], ease: ["easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "folder-tree",
	render: (part) => (
		<>
			<motion.path {...part(redraw(0, 0.3))} d="M3 5a2 2 0 0 0 2 2h3" />
			<motion.path {...part(redraw(0, 0.45))} d="M3 3v13a2 2 0 0 0 2 2h3" />
			<motion.path
				{...part(sprout(0.1))}
				d="M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
				style={edge(0, 0.5)}
			/>
			<motion.path
				{...part(sprout(0.24))}
				d="M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
				style={edge(0, 0.5)}
			/>
		</>
	),
});

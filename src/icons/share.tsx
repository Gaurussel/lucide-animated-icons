import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, springy } from "../helpers.ts";

const launch = pose(
	{ y: [0, 2, -10, 8, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.68, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "share",
	render: (part) => (
		<>
			<motion.g {...part(launch)}>
				<path d="M12 2v13" />
				<path d="m16 6-4-4-4 4" />
			</motion.g>
			<motion.path
				{...part(jelly(0.12, 0.68))}
				d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
				style={edge(0.5, 1)}
			/>
		</>
	),
});

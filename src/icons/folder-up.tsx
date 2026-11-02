import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const leap = pose(
	{ y: [0, -4, 0, 0] },
	{ duration: 0.65, times: [0, 0.22, 0.44, 1], ease: [snap, "easeIn", "easeInOut"] },
);
const lift = pose(
	{ y: [0, 2, -9, 6, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", snap, springy] },
);

export default createAnimatedIcon({
	name: "folder-up",
	render: (part) => (
		<motion.g {...part(leap)}>
			<motion.path
				{...part(jelly(0.44, 0.65))}
				d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
				style={edge(0.5, 1)}
			/>
			<motion.g {...part(lift)}>
				<path d="M12 10v6" />
				<path d="m9 13 3-3 3 3" />
			</motion.g>
		</motion.g>
	),
});

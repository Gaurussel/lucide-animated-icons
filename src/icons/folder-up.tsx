import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const lift = pose(
	{ y: [0, 1, -2, -2, 0], rotate: [0, 0, -6, -6, 0] },
	{ duration: 0.8, times: [0, 0.15, 0.4, 0.7, 1] },
);
const rise = pose(
	{ y: [0, 1, -4.5, 4.5, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.8, times: [0, 0.15, 0.55, 0.56, 1] },
);

export default createAnimatedIcon({
	name: "folder-up",
	render: (part) => (
		<motion.g {...part(lift)} style={edge(0.5, 1)}>
			<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
			<motion.g {...part(rise)}>
				<path d="M12 10v6" />
				<path d="m9 13 3-3 3 3" />
			</motion.g>
		</motion.g>
	),
});

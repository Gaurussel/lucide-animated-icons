import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const gust = pose(
	{ rotate: [0, 4.8, -14.4, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, ring] },
);
const post = pose(
	{ rotate: [0, 0, -3.6, 0] },
	{ duration: 0.75, times: [0, 0.22, 0.38, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "milestone",
	render: (part) => (
		<motion.g {...part(post)} style={pivot(12, 21)}>
			<path d="M12 13v8" />
			<path d="M12 3v3" />
			<motion.path
				{...part(gust)}
				d="M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"
				style={pivot(12, 6)}
			/>
		</motion.g>
	),
});

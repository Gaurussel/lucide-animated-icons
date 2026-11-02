import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, ring, snap } from "../helpers.ts";

const leap = pose(
	{ y: [0, -4, 0, 0] },
	{ duration: 0.65, times: [0, 0.22, 0.44, 1], ease: [snap, "easeIn", "easeInOut"] },
);
const zip = pose(
	{ y: [0, 0, 2, 0], rotate: [0, 0, 25, 0] },
	{ duration: 0.7, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "folder-archive",
	render: (part) => (
		<motion.g {...part(leap)}>
			<motion.path
				{...part(jelly(0.44, 0.65))}
				d="M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"
				style={edge(0.5, 1)}
			/>
			<path d="M15 11v-1" />
			<motion.g {...part(zip)} style={pivot(15, 15)}>
				<path d="M15 17v-2" />
				<circle cx="15" cy="19" r="2" />
			</motion.g>
		</motion.g>
	),
});

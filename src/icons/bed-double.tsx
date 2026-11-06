import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const dip = pose(
	{ y: [0, 0, 1.2, 0] },
	{ duration: 0.72, times: [0, 0.15, 0.25, 1], ease: ["easeInOut", snap, springy] },
);
const pillows = pose(
	{ y: [0, 0.6, -1.8, 0] },
	{ duration: 0.72, times: [0, 0.18, 0.36, 1], ease: ["easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "bed-double",
	render: (part) => (
		<>
			<motion.g {...part(dip)}>
				<path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
				<path d="M2 18h20" />
			</motion.g>
			<motion.g {...part(pillows)}>
				<path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
				<path d="M12 4v6" />
			</motion.g>
		</>
	),
});

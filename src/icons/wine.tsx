import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const raise = pose(
	{ y: [0, 0.6, -1.8, 0], rotate: [0, 3.6, -12, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, springy] },
);
const slosh = pose(
	{ x: [0, 0, -0.6, 0], rotate: [0, 0, 18, 0] },
	{ duration: 0.72, times: [0, 0.22, 0.38, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "wine",
	render: (part) => (
		<>
			<motion.g {...part(raise)} style={pivot(12, 22)}>
				<motion.path {...part(slosh)} d="M7 10h10" style={pivot(12, 10)} />
				<path d="M12 15v7" />
				<path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
			</motion.g>
			<path d="M8 22h8" />
		</>
	),
});

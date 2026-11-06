import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, ring, snap, springy } from "../helpers.ts";

const roll = pose(
	{ x: [0, -0.9, 2.4, 0], rotate: [0, -3, 12, 0] },
	{ duration: 0.72, times: [0, 0.15, 0.38, 1], ease: ["easeInOut", "easeIn", springy] },
);
const sag = pose(
	{ y: [0, 0, 1.2, 0] },
	{ duration: 0.6, delay: 0.1, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "spool",
	render: (part) => (
		<motion.g {...part(roll)} style={centered}>
			<motion.path
				{...part(sag)}
				d="M17 13.44 4.442 17.082A2 2 0 0 0 4.982 21H19a2 2 0 0 0 .558-3.921l-1.115-.32A2 2 0 0 1 17 14.837V7.66"
			/>
			<path d="m7 10.56 12.558-3.642A2 2 0 0 0 19.018 3H5a2 2 0 0 0-.558 3.921l1.115.32A2 2 0 0 1 7 9.163v7.178" />
		</motion.g>
	),
});

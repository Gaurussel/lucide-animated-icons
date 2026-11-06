import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, rubber, snap, springy } from "../helpers.ts";

const tip = pose(
	{ rotate: [0, -10.8, 4.8, 0] },
	{ duration: 0.72, times: [0, 0.25, 0.45, 1], ease: ["easeInOut", "easeInOut", rubber] },
);
const handle = (degrees: number) =>
	pose({ rotate: [0, 0, degrees, 0] }, { duration: 0.72, times: [0, 0.2, 0.35, 1], ease: ["easeInOut", snap, ring] });
const lid = pose(
	{ y: [0, 0, -1.5, 0] },
	{ duration: 0.72, times: [0, 0.38, 0.46, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "amphora",
	render: (part) => (
		<motion.g {...part(tip)} style={pivot(12, 22)}>
			<path d="M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8" />
			<path d="M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8" />
			<path d="M18 22H6" />
			<motion.path {...part(handle(20))} d="M10 5H8a2 2 0 0 0 0 4h.68" style={pivot(10, 5)} />
			<motion.path {...part(handle(-20))} d="M14 5h2a2 2 0 0 1 0 4h-.68" style={pivot(14, 5)} />
			<motion.g {...part(lid)}>
				<path d="M9 2h6" />
			</motion.g>
		</motion.g>
	),
});

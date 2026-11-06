import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap } from "../helpers.ts";

const swing = pose(
	{ rotate: [0, -3.6, 10.8, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, ring] },
);
const bulb = pose(
	{ rotate: [0, 0, -18, 0] },
	{ duration: 0.75, times: [0, 0.2, 0.38, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "lamp-ceiling",
	render: (part) => (
		<motion.g {...part(swing)} style={pivot(12, 2)}>
			<path d="M12 2v5" />
			<motion.path {...part(bulb)} d="M14.829 15.998a3 3 0 1 1-5.658 0" style={pivot(12, 16)} />
			<path d="M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z" />
		</motion.g>
	),
});

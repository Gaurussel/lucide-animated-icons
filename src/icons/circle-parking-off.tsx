import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose, redraw, snap, springy } from "../helpers.ts";

const press = pose({ scale: [1, 0.88, 1] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });
const park = pose(
	{ y: [0, -4, 0], rotate: [0, -12, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "circle-parking-off",
	render: (part) => (
		<>
			<motion.circle {...part(press)} cx="12" cy="12" r="10" style={centered} />
			<motion.path {...part(redraw(0.15, 0.45))} d="m5 5 14 14" />
			<motion.g {...part(park)} style={edge(0, 1)}>
				<path d="M13 13a3 3 0 1 0 0-6H9v2" />
				<path d="M9 17v-2.34" />
			</motion.g>
		</>
	),
});

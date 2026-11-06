import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose, snap, springy } from "../helpers.ts";

const press = pose({ scale: [1, 0.93, 1] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });
const coin = pose(
	{ y: [0, -2.4, 0], rotate: [0, -9, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "circle-pound-sterling",
	render: (part) => (
		<>
			<motion.g {...part(coin)} style={edge(0.5, 1)}>
				<path d="M10 16V9.5a1 1 0 0 1 5 0" />
				<path d="M8 12h4" />
				<path d="M8 16h7" />
			</motion.g>
			<motion.circle {...part(press)} cx="12" cy="12" r="10" style={centered} />
		</>
	),
});

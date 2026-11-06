import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, springy } from "../helpers.ts";

const dip = pose(
	{ x: [0, -0.6, 2.4, 0], y: [0, 0.6, -2.4, 0], rotate: [0, 2.4, -9, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", "easeIn", springy] },
);
const drip = pose(
	{ y: [0, 0, 3, 0], opacity: [1, 1, 0, 1] },
	{ duration: 0.7, times: [0, 0.32, 0.55, 1], ease: ["easeInOut", "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "pipette",
	render: (part) => (
		<>
			<motion.g {...part(dip)} style={pivot(3, 21)}>
				<path d="m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12" />
				<path d="m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z" />
			</motion.g>
			<motion.path {...part(drip)} d="m2 22 .414-.414" />
		</>
	),
});

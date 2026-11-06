import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, rubber, snap } from "../helpers.ts";

const leap = pose(
	{ y: [0, -2.4, 0, 0] },
	{ duration: 0.65, times: [0, 0.22, 0.44, 1], ease: [snap, "easeIn", "easeInOut"] },
);
const nod = pose(
	{ rotate: [0, -12, 0], scale: [1, 0.91, 1] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: ["easeInOut", rubber] },
);

export default createAnimatedIcon({
	name: "house-plus",
	render: (part) => (
		<>
			<motion.g {...part(leap)}>
				<motion.g {...part(jelly(0.44, 0.65))} style={edge(0.5, 1)}>
					<path d="M12.662 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v2.475" />
					<path d="M14.959 12.717A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8" />
				</motion.g>
			</motion.g>
			<motion.g {...part(nod)} style={pivot(18, 18)}>
				<path d="M15 18h6" />
				<path d="M18 15v6" />
			</motion.g>
		</>
	),
});

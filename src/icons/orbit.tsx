import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const revolve = pose(
	{ rotate: [0, -20, 360] },
	{ duration: 0.75, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);
const core = pose({ scale: [1, 0.5, 1] }, { duration: 0.75, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "orbit",
	render: (part) => (
		<>
			<motion.g {...part(revolve)} style={pivot(12, 12)}>
				<path d="M20.341 6.484A10 10 0 0 1 10.266 21.85" />
				<path d="M3.659 17.516A10 10 0 0 1 13.74 2.152" />
				<circle cx="19" cy="5" r="2" />
				<circle cx="5" cy="19" r="2" />
			</motion.g>
			<motion.circle {...part(core)} cx="12" cy="12" r="3" style={centered} />
		</>
	),
});

import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, rubber, snap, springy } from "../helpers.ts";

const press = pose({ scale: [1, 0.88, 1] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });
const apart = (y: number) => pose({ y: [0, y, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] });
const bar = pose(
	{ rotate: [0, 0, 360] },
	{ duration: 0.7, times: [0, 0.1, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "circle-divide",
	render: (part) => (
		<>
			<motion.line {...part(bar)} style={centered} x1="8" x2="16" y1="12" y2="12" />
			<motion.line {...part(apart(3))} x1="12" x2="12" y1="16" y2="16" />
			<motion.line {...part(apart(-3))} x1="12" x2="12" y1="8" y2="8" />
			<motion.circle {...part(press)} cx="12" cy="12" r="10" style={centered} />
		</>
	),
});

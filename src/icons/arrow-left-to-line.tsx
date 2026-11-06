import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, ring, snap, springy } from "../helpers.ts";

const hit = pose(
	{ x: [0, 2.16, -2.4, 0.96, 0] },
	{ duration: 0.7, times: [0, 0.22, 0.38, 0.52, 1], ease: ["easeInOut", "easeIn", "easeOut", springy] },
);
const lag = pose(
	{ x: [0, 2.16, -2.4, 0.96, 0] },
	{ duration: 0.7, delay: 0.06, times: [0, 0.22, 0.38, 0.52, 1], ease: ["easeInOut", "easeIn", "easeOut", springy] },
);
const give = pose(
	{ x: [0, 0, -1.44, 0] },
	{ duration: 0.7, times: [0, 0.36, 0.44, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "arrow-left-to-line",
	render: (part) => (
		<>
			<motion.path {...part(hit)} d="m13 6-6 6 6 6" />
			<motion.path {...part(lag)} d="M7 12h14" />
			<motion.path {...part(give)} d="M3 19V5" />
		</>
	),
});

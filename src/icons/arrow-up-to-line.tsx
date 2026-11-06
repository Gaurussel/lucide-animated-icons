import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, ring, snap, springy } from "../helpers.ts";

const hit = pose(
	{ y: [0, 2.16, -2.4, 0.96, 0] },
	{ duration: 0.7, times: [0, 0.22, 0.38, 0.52, 1], ease: ["easeInOut", "easeIn", "easeOut", springy] },
);
const lag = pose(
	{ y: [0, 2.16, -2.4, 0.96, 0] },
	{ duration: 0.7, delay: 0.06, times: [0, 0.22, 0.38, 0.52, 1], ease: ["easeInOut", "easeIn", "easeOut", springy] },
);
const give = pose(
	{ y: [0, 0, -1.44, 0] },
	{ duration: 0.7, times: [0, 0.36, 0.44, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "arrow-up-to-line",
	render: (part) => (
		<>
			<motion.path {...part(hit)} d="m18 13-6-6-6 6" />
			<motion.path {...part(lag)} d="M12 7v14" />
			<motion.path {...part(give)} d="M5 3h14" />
		</>
	),
});

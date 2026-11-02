import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, ring, snap, springy } from "../helpers.ts";

const hit = pose(
	{ y: [0, -3.6, 4, -1.6, 0] },
	{ duration: 0.7, times: [0, 0.22, 0.38, 0.52, 1], ease: ["easeInOut", "easeIn", "easeOut", springy] },
);
const lag = pose(
	{ y: [0, -3.6, 4, -1.6, 0] },
	{ duration: 0.7, delay: 0.06, times: [0, 0.22, 0.38, 0.52, 1], ease: ["easeInOut", "easeIn", "easeOut", springy] },
);
const give = pose({ y: [0, 0, 2.4, 0] }, { duration: 0.7, times: [0, 0.36, 0.44, 1], ease: ["easeInOut", snap, ring] });

export default createAnimatedIcon({
	name: "arrow-down-to-line",
	render: (part) => (
		<>
			<motion.path {...part(hit)} d="m6 11 6 6 6-6" />
			<motion.path {...part(lag)} d="M12 17V3" />
			<motion.path {...part(give)} d="M19 21H5" />
		</>
	),
});

import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const hit = pose(
	{ y: [0, -3.6, 4, -1.6, 0] },
	{ duration: 0.7, times: [0, 0.22, 0.38, 0.52, 1], ease: ["easeInOut", "easeIn", "easeOut", springy] },
);
const lag = pose(
	{ y: [0, -3.6, 4, -1.6, 0] },
	{ duration: 0.7, delay: 0.06, times: [0, 0.22, 0.38, 0.52, 1], ease: ["easeInOut", "easeIn", "easeOut", springy] },
);
const give = pose(
	{ y: [0, 0, 2.4, -2, 0] },
	{ duration: 0.7, times: [0, 0.36, 0.44, 0.58, 1], ease: ["easeInOut", snap, "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "arrow-down-to-dot",
	render: (part) => (
		<>
			<motion.path {...part(hit)} d="m19 9-7 7-7-7" />
			<motion.path {...part(lag)} d="M12 2v14" />
			<motion.circle {...part(give)} cx="12" cy="21" r="1" />
		</>
	),
});

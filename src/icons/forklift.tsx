import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const drive = pose({ x: [0, -1.5, 3, 3, 0] }, { duration: 0.8, times: [0, 0.18, 0.55, 0.7, 1] });
const roll = (delay: number) =>
	pose({ y: [0, -0.8, 0, -0.8, 0] }, { duration: 0.8, delay, times: [0, 0.3, 0.45, 0.6, 1] });

export default createAnimatedIcon({
	name: "forklift",
	render: (part) => (
		<motion.g {...part(drive)}>
			<path d="M12 12H5a2 2 0 0 0-2 2v5" />
			<motion.circle {...part(roll(0))} cx="13" cy="19" r="2" />
			<motion.circle {...part(roll(0.05))} cx="5" cy="19" r="2" />
			<path d="M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5" />
		</motion.g>
	),
});

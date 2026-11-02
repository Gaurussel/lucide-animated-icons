import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const drive = pose(
	{ x: [0, -1.5, 3, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", "easeInOut", springy] },
);
const pedal = pose({ y: [0, -2, 0] }, { duration: 0.6, delay: 0.08, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "bike",
	render: (part) => (
		<motion.g {...part(drive)}>
			<circle cx="18.5" cy="17.5" r="3.5" />
			<circle cx="5.5" cy="17.5" r="3.5" />
			<motion.g {...part(pedal)}>
				<circle cx="15" cy="5" r="1" />
				<path d="M12 17.5V14l-3-3 4-3 2 3h2" />
			</motion.g>
		</motion.g>
	),
});

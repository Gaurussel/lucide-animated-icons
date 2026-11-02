import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const press = pose({ y: [0, 3, 0] }, { duration: 0.65, times: [0, 0.25, 1], ease: [snap, springy] });
const squirt = pose(
	{ y: [0, 0, -4, 0], x: [0, 0, 1, 0] },
	{ duration: 0.7, times: [0, 0.2, 0.4, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "soap-dispenser-droplet",
	render: (part) => (
		<>
			<motion.g {...part(press)}>
				<path d="M10.5 2v4" />
				<path d="M14 2H7a2 2 0 0 0-2 2" />
			</motion.g>
			<motion.path
				{...part(squirt)}
				d="M19.29 14.76A6.67 6.67 0 0 1 17 11a6.6 6.6 0 0 1-2.29 3.76c-1.15.92-1.71 2.04-1.71 3.19 0 2.22 1.8 4.05 4 4.05s4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19"
			/>
			<path d="M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
		</>
	),
});

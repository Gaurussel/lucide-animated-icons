import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, springy } from "../helpers.ts";

const press = (delay: number) =>
	pose(
		{ y: [0, -1.5, 2.4, 0] },
		{ duration: 0.6, delay, times: [0, 0.18, 0.36, 1], ease: ["easeInOut", "easeIn", springy] },
	);

export default createAnimatedIcon({
	name: "pause",
	render: (part) => (
		<>
			<motion.rect {...part(press(0.1))} height="16" rx="1" width="4" x="14" y="4" />
			<motion.rect {...part(press(0))} height="16" rx="1" width="4" x="6" y="4" />
		</>
	),
});

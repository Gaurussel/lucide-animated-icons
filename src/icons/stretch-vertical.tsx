import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap } from "../helpers.ts";

const pull = (direction: number, delay: number) =>
	pose(
		{ y: [0, 1 * direction, -4 * direction, 0] },
		{ duration: 0.62, delay, times: [0, 0.15, 0.38, 1], ease: ["easeInOut", snap, rubber] },
	);

export default createAnimatedIcon({
	name: "stretch-vertical",
	render: (part) => (
		<>
			<motion.rect {...part(pull(1, 0))} height="20" rx="2" width="6" x="4" y="2" />
			<motion.rect {...part(pull(-1, 0.1))} height="20" rx="2" width="6" x="14" y="2" />
		</>
	),
});

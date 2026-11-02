import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap } from "../helpers.ts";

const split = (d: number) =>
	pose({ x: [0, d, 0], y: [0, d, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "ungroup",
	render: (part) => (
		<>
			<motion.rect {...part(split(-2.5))} height="6" rx="1" width="8" x="5" y="4" />
			<motion.rect {...part(split(2.5))} height="6" rx="1" width="8" x="11" y="14" />
		</>
	),
});

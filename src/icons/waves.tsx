import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap } from "../helpers.ts";

const roll = (x: number, delay: number) =>
	pose({ x: [0, x, 0], y: [0, -1.5, 0] }, { duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "waves",
	render: (part) => (
		<>
			<motion.path
				{...part(roll(3, 0))}
				d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
			/>
			<motion.path
				{...part(roll(-3, 0.07))}
				d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
			/>
			<motion.path
				{...part(roll(3, 0.14))}
				d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
			/>
		</>
	),
});

import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const swell = (delay: number) =>
	pose({ x: [0, -2.5, 2.5, 0], y: [0, -0.8, 0.8, 0] }, { duration: 0.8, delay, times: [0, 0.35, 0.75, 1] });

export default createAnimatedIcon({
	name: "waves",
	render: (part) => (
		<>
			<motion.path
				{...part(swell(0))}
				d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
			/>
			<motion.path
				{...part(swell(0.1))}
				d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
			/>
			<motion.path
				{...part(swell(0.2))}
				d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
			/>
		</>
	),
});

import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const pointer = pose({ x: [0, -4, 0], y: [0, -5, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "lasso-select",
	render: (part) => (
		<>
			<motion.path
				{...part(redraw(0.1, 0.55))}
				d="M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"
			/>
			<motion.path {...part(redraw(0.25, 0.4))} d="M7 16.93c.96.43 1.96.74 2.99.91" />
			<path d="M7 22a5 5 0 0 1-2-4" />
			<path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
			<motion.path
				{...part(pointer)}
				d="M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z"
			/>
		</>
	),
});

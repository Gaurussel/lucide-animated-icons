import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const blink = (delay: number) => pose({ opacity: [1, 0, 0, 1] }, { duration: 0.8, delay, times: [0, 0.3, 0.55, 1] });

export default createAnimatedIcon({
	name: "dices",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -18, 12, 0], y: [0, -3, 0, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
			style={centered}
		>
			<rect height="12" rx="2" ry="2" width="12" x="2" y="10" />
			<path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" />
			<motion.path {...part(blink(0))} d="M6 18h.01" />
			<motion.path {...part(blink(0.05))} d="M10 14h.01" />
			<motion.path {...part(blink(0.1))} d="M15 6h.01" />
			<motion.path {...part(blink(0.15))} d="M18 9h.01" />
		</motion.g>
	),
});

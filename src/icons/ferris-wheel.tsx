import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "ferris-wheel",
	render: (part) => (
		<>
			<motion.g {...part(pose({ rotate: 360 }, { duration: 0.8, reset: true }))} style={pivot(12, 12)}>
				<circle cx="12" cy="12" r="2" />
				<path d="M12 2v4" />
				<path d="m6.8 15-3.5 2" />
				<path d="m20.7 7-3.5 2" />
				<path d="M6.8 9 3.3 7" />
				<path d="m20.7 17-3.5-2" />
			</motion.g>
			<path d="m9 22 3-8 3 8" />
			<path d="M8 22h8" />
			<path d="M18 18.7a9 9 0 1 0-12 0" />
		</>
	),
});

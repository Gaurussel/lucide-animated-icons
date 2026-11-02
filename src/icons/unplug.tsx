import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const times = [0, 0.2, 0.5, 0.7, 1];
const away = pose({ x: [0, 0.8, -2, -2, 0], y: [0, -0.8, 2, 2, 0] }, { duration: 0.75, times });
const outward = pose({ x: [0, -0.8, 2, 2, 0], y: [0, 0.8, -2, -2, 0] }, { duration: 0.75, times });

export default createAnimatedIcon({
	name: "unplug",
	render: (part) => (
		<>
			<motion.path {...part(outward)} d="m19 5 3-3" />
			<motion.g {...part(away)}>
				<path d="m2 22 3-3" />
				<path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
				<path d="M7.5 13.5 10 11" />
				<path d="M10.5 16.5 13 14" />
			</motion.g>
			<motion.path {...part(outward)} d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" />
		</>
	),
});

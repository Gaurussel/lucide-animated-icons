import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const gust = (delay: number) =>
	pose({ pathLength: [1, 0.1, 0.1, 1], x: [0, 2, 2, 0] }, { duration: 0.8, delay, times: [0, 0.35, 0.55, 1] });

export default createAnimatedIcon({
	name: "wind-arrow-down",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -1, 2, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}>
				<path d="M10 2v8" />
				<path d="m6 6 4 4 4-4" />
			</motion.g>
			<motion.path {...part(gust(0.15))} d="M12.8 21.6A2 2 0 1 0 14 18H2" />
			<motion.path {...part(gust(0.05))} d="M17.5 10a2.5 2.5 0 1 1 2 4H2" />
		</>
	),
});

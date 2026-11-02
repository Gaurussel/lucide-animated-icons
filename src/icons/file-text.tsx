import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const body = pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] });
const write = (line: number) =>
	pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.65, delay: line * 0.1, times: [0, 0.2, 0.4, 1] });

export default createAnimatedIcon({
	name: "file-text",
	render: (part) => (
		<motion.g {...part(body)}>
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			<motion.path {...part(write(0))} d="M10 9H8" />
			<motion.path {...part(write(1))} d="M16 13H8" />
			<motion.path {...part(write(2))} d="M16 17H8" />
		</motion.g>
	),
});

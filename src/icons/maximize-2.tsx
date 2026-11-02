import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const timing = { duration: 0.65, times: [0, 0.2, 0.55, 1] };
const arrow = (direction: number) =>
	pose({ x: [0, -direction, direction * 1.5, 0], y: [0, direction, -direction * 1.5, 0] }, timing);

export default createAnimatedIcon({
	name: "maximize-2",
	render: (part) => (
		<>
			<motion.g {...part(arrow(1))}>
				<path d="M15 3h6v6" />
				<path d="m21 3-7 7" />
			</motion.g>
			<motion.g {...part(arrow(-1))}>
				<path d="m3 21 7-7" />
				<path d="M9 21H3v-6" />
			</motion.g>
		</>
	),
});

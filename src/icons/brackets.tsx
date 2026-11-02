import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const open = (direction: number, delay: number) =>
	pose(
		{ x: [0, -direction, direction * 2.5, direction * 2.5, 0] },
		{ duration: 0.65, delay, times: [0, 0.15, 0.4, 0.6, 1] },
	);

export default createAnimatedIcon({
	name: "brackets",
	render: (part) => (
		<>
			<motion.path {...part(open(-1, 0))} d="M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3" />
			<motion.path {...part(open(1, 0.06))} d="M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3" />
		</>
	),
});

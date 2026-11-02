import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const plug = pose({ y: [0, -2, -2, 0] }, { duration: 0.8, times: [0, 0.35, 0.55, 1] });
const seat = pose({ scale: [1, 1, 0.94, 1] }, { duration: 0.8, times: [0, 0.55, 0.75, 1] });

export default createAnimatedIcon({
	name: "house-plug",
	render: (part) => (
		<>
			<motion.g {...part(plug)}>
				<path d="M10 12V8.964" />
				<path d="M14 12V8.964" />
				<path d="M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z" />
			</motion.g>
			<motion.path
				{...part(seat)}
				d="M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2"
				style={edge(0.5, 1)}
			/>
		</>
	),
});

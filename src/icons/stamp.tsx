import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const times = [0, 0.2, 0.5, 0.7, 1];

export default createAnimatedIcon({
	name: "stamp",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -1.5, 2, 2, 0] }, { duration: 0.75, times }))}>
				<path d="M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13" />
				<path d="M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z" />
			</motion.g>
			<motion.path {...part(pose({ y: [0, 0, 0.8, 0.8, 0] }, { duration: 0.75, times }))} d="M5 22h14" />
		</>
	),
});

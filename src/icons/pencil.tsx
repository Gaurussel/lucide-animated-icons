import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "pencil",
	render: (part) => (
		<motion.g {...part(pose({ x: [0, 3, 0.5, 3.5, 0] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] }))}>
			<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
			<path d="m15 5 4 4" />
		</motion.g>
	),
});

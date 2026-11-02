import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "ampersand",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1] }, { duration: 0.5, times: [0, 0.35, 1] }))}
				d="M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1] }, { duration: 0.5, delay: 0.25, times: [0, 0.35, 1] }))}
				d="M16 12h3"
			/>
		</>
	),
});

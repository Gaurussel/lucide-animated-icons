import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "baseline",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, 0, 0.8, 0] }, { duration: 0.8, times: [0, 0.3, 0.55, 1] }))}
				d="M4 20h16"
			/>
			<motion.g {...part(pose({ y: [0, -2, 0, 0] }, { duration: 0.8, times: [0, 0.3, 0.55, 1] }))}>
				<path d="m6 16 6-12 6 12" />
				<path d="M8 12h8" />
			</motion.g>
		</>
	),
});

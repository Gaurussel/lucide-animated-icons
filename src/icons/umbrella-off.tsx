import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "umbrella-off",
	render: (part) => (
		<>
			<motion.path {...part(pose({ y: [0, -0.8, 0] }, { duration: 0.6, times: [0, 0.5, 1] }))} d="M12 2v1" />
			<motion.path
				{...part(pose({ x: [0, -2, 0], y: [0, 1, 0] }, { duration: 0.6, times: [0, 0.5, 1] }))}
				d="M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575"
			/>
			<motion.path
				{...part(pose({ x: [0, 2, 0], y: [0, 1, 0] }, { duration: 0.6, times: [0, 0.5, 1] }))}
				d="M17.5 12H22A10 10 0 0 0 9.004 3.455"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.8, times: [0, 0.4, 0.55, 1] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});

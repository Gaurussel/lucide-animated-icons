import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "code",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, -1.5, 2, 0] }, { duration: 0.7, times: [0, 0.3, 0.65, 1] }))}
				d="m16 18 6-6-6-6"
			/>
			<motion.path
				{...part(pose({ x: [0, 1.5, -2, 0] }, { duration: 0.7, times: [0, 0.3, 0.65, 1] }))}
				d="m8 6-6 6 6 6"
			/>
		</>
	),
});

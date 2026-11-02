import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "merge",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, 0, -3, 0] }, { duration: 0.7, times: [0, 0.4, 0.7, 1] }))}
				d="m8 6 4-4 4 4"
			/>
			<path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1] }, { duration: 0.6, times: [0, 0.3, 1] }))}
				d="m20 22-5-5"
			/>
		</>
	),
});

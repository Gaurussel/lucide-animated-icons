import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "fish-symbol",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, -1.5, 3, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
				d="M2 16s9-15 20-4C11 23 2 8 2 8"
			/>
		</>
	),
});

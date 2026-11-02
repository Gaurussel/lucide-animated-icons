import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "move-diagonal-2",
	render: (part) => (
		<>
			<path d="m5 5 14 14" />
			<motion.path
				{...part(
					pose({ x: [0, -1.5, 1.4, 0], y: [0, -1.5, 1.4, 0] }, { duration: 0.65, times: [0, 0.25, 0.6, 1] }),
				)}
				d="M19 13v6h-6"
			/>
			<motion.path
				{...part(
					pose({ x: [0, 1.5, -1.4, 0], y: [0, 1.5, -1.4, 0] }, { duration: 0.65, times: [0, 0.25, 0.6, 1] }),
				)}
				d="M5 11V5h6"
			/>
		</>
	),
});

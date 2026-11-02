import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "move-diagonal",
	render: (part) => (
		<>
			<path d="M19 5 5 19" />
			<motion.path
				{...part(
					pose({ x: [0, 1.5, -1.4, 0], y: [0, -1.5, 1.4, 0] }, { duration: 0.65, times: [0, 0.25, 0.6, 1] }),
				)}
				d="M11 19H5v-6"
			/>
			<motion.path
				{...part(
					pose({ x: [0, -1.5, 1.4, 0], y: [0, 1.5, -1.4, 0] }, { duration: 0.65, times: [0, 0.25, 0.6, 1] }),
				)}
				d="M13 5h6v6"
			/>
		</>
	),
});

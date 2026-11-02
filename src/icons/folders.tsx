import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "folders",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, -1, 1.5, 0], y: [0, 1, -2, 0] }, { duration: 0.7, times: [0, 0.2, 0.55, 1] }))}
				d="M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"
			/>
			<motion.path
				{...part(pose({ x: [0, 0, -1, 0], y: [0, 0, 1, 0] }, { duration: 0.7, times: [0, 0.2, 0.55, 1] }))}
				d="M2 8v11a2 2 0 0 0 2 2h14"
			/>
		</>
	),
});

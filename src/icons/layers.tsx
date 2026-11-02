import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const timing = { duration: 0.75, times: [0, 0.4, 0.65, 1] };

export default createAnimatedIcon({
	name: "layers",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -3, -3, 0] }, timing))}
				d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
			/>
			<path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
			<motion.path
				{...part(pose({ y: [0, 3, 3, 0] }, timing))}
				d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"
			/>
		</>
	),
});

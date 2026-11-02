import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "pen-line",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1] }, { duration: 0.6, delay: 0.1, times: [0, 0.35, 1] }))}
				d="M12 20h9"
			/>
			<motion.path
				{...part(
					pose({ x: [0, 1.5, 3, 0], y: [0, -1.5, -1.5, 0] }, { duration: 0.7, times: [0, 0.25, 0.65, 1] }),
				)}
				d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"
			/>
		</>
	),
});

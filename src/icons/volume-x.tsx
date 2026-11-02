import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const cross = (delay: number) => pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.6, delay, times: [0, 0.3, 0.45, 1] });

export default createAnimatedIcon({
	name: "volume-x",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scale: [1, 0.75, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
				style={edge(0.2, 0.5)}
			/>
			<motion.line {...part(cross(0.1))} x1="22" x2="16" y1="9" y2="15" />
			<motion.line {...part(cross(0.25))} x1="16" x2="22" y1="9" y2="15" />
		</>
	),
});

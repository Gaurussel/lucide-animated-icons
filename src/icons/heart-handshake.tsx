import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const beat = pose({ scale: [1, 1.12, 1, 1.08, 1, 1] }, { duration: 0.85, times: [0, 0.15, 0.3, 0.45, 0.6, 1] });
const clasp = pose({ pathLength: [1, 1, 0, 0, 1] }, { duration: 0.85, times: [0, 0.3, 0.45, 0.6, 0.9] });

export default createAnimatedIcon({
	name: "heart-handshake",
	render: (part) => (
		<>
			<motion.path
				{...part(beat)}
				d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
				style={centered}
			/>
			<motion.path
				{...part(clasp)}
				d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, 1, 0, 0], y: [0, 0, 1, 0, 0] },
						{ duration: 0.85, delay: 0.1, times: [0, 0.3, 0.45, 0.6, 1] },
					),
				)}
				d="m18 15-2-2"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, 1, 0, 0], y: [0, 0, 1, 0, 0] },
						{ duration: 0.85, delay: 0.15, times: [0, 0.3, 0.45, 0.6, 1] },
					),
				)}
				d="m15 18-2-2"
			/>
		</>
	),
});

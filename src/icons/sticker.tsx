import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "sticker",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scale: [1, 0.9, 1, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.55, 0.8, 1] }))}
				d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"
				style={centered}
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 2.5, 0, 0, 0], y: [0, -2.5, 0, 0, 0] },
						{ duration: 0.8, times: [0, 0.3, 0.55, 0.8, 1] },
					),
				)}
				d="M14 3v4a2 2 0 0 0 2 2h4"
			/>
			<motion.g {...part(pose({ opacity: [1, 1, 0, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.55, 0.8, 1] }))}>
				<path d="M8 13h.01" />
				<path d="M16 13h.01" />
			</motion.g>
			<motion.path
				{...part(pose({ scale: [1, 1, 1, 1.5, 1] }, { duration: 0.8, times: [0, 0.3, 0.55, 0.8, 1] }))}
				d="M10 16s.8 1 2 1c1.3 0 2-1 2-1"
				style={centered}
			/>
		</>
	),
});

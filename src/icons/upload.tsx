import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "upload",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ y: [0, 1.5, -7, 7, 0], opacity: [1, 1, 0, 0, 1] },
						{ duration: 0.8, times: [0, 0.18, 0.55, 0.56, 1] },
					),
				)}
			>
				<path d="M12 3v12" />
				<path d="m17 8-5-5-5 5" />
			</motion.g>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.88, 1] }, { duration: 0.8, times: [0, 0.75, 0.88, 1] }))}
				d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
				style={edge(0.5, 1)}
			/>
		</>
	),
});

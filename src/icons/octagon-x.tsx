import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "octagon-x",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.9, 1, 1] }, { duration: 0.7, times: [0, 0.3, 0.55, 1] }))}
				style={centered}
			>
				<path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" />
				<motion.path
					{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.2, 0.35, 1] }))}
					d="m15 9-6 6"
				/>
				<motion.path
					{...part(
						pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.2, 0.35, 1], delay: 0.12 }),
					)}
					d="m9 9 6 6"
				/>
			</motion.g>
		</>
	),
});

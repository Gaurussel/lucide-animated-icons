import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "octagon-pause",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.7, times: [0, 0.3, 0.55, 1] }))}
				style={centered}
			>
				<path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" />
				<motion.path
					{...part(pose({ scaleY: [1, 1, 0.5, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
					d="M10 15V9"
					style={centered}
				/>
				<motion.path
					{...part(pose({ scaleY: [1, 1, 0.5, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1], delay: 0.06 }))}
					d="M14 15V9"
					style={centered}
				/>
			</motion.g>
		</>
	),
});

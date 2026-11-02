import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "octagon-alert",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.92, 1, 1] }, { duration: 0.7, times: [0, 0.3, 0.55, 1] }))}
				style={centered}
			>
				<path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z" />
				<motion.path
					{...part(pose({ y: [0, 0, -1.5, 0] }, { duration: 0.7, times: [0, 0.3, 0.55, 1] }))}
					d="M12 8v4"
				/>
				<motion.path
					{...part(pose({ y: [0, 0, -1.5, 0] }, { duration: 0.7, times: [0, 0.4, 0.65, 1] }))}
					d="M12 16h.01"
				/>
			</motion.g>
		</>
	),
});

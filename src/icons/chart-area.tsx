import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "chart-area",
	render: (part) => (
		<>
			<path d="M3 3v16a2 2 0 0 0 2 2h16" />
			<motion.path
				{...part(pose({ scaleY: [1, 0.2, 0.2, 1] }, { duration: 0.7, times: [0, 0.3, 0.5, 1] }))}
				d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"
				style={edge(0.5, 1)}
			/>
		</>
	),
});

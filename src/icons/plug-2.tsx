import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "plug-2",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.8, 1.4, 1] }, { duration: 0.75, times: [0, 0.25, 0.6, 1] }))}
				d="M12 17v5"
				style={edge(0.5, 1)}
			/>
			<motion.g {...part(pose({ y: [0, 1, -2, 0] }, { duration: 0.75, times: [0, 0.25, 0.6, 1] }))}>
				<path d="M9 2v6" />
				<path d="M15 2v6" />
				<path d="M5 8h14" />
				<path d="M6 11V8h12v3a6 6 0 1 1-12 0Z" />
			</motion.g>
		</>
	),
});

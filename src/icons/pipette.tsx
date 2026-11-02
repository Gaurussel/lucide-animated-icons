import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "pipette",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ x: [0, 1.5, 0, 0], y: [0, -1.5, 0, 0] }, { duration: 0.9, times: [0, 0.3, 0.5, 1] }))}
			>
				<path d="m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12" />
				<path d="m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z" />
			</motion.g>
			<motion.path
				{...part(pose({ scale: [1, 1, 1.9, 1] }, { duration: 0.9, times: [0, 0.5, 0.7, 1] }))}
				d="m2 22 .414-.414"
				style={centered}
			/>
		</>
	),
});

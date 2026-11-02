import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "beaker",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -2.5, -2.5, 0, 0] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] }))}
				d="M4.5 3h15"
			/>
			<path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
			<motion.path
				{...part(pose({ rotate: [0, 0, -12, 12, 0] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] }))}
				d="M6 14h12"
				style={centered}
			/>
		</>
	),
});

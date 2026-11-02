import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const times = [0, 0.2, 0.55, 1];

export default createAnimatedIcon({
	name: "user-round",
	render: (part) => (
		<>
			<motion.circle {...part(pose({ y: [0, 1, -2.5, 0] }, { duration: 0.7, times }))} cx="12" cy="8" r="5" />
			<motion.path
				{...part(pose({ scaleY: [1, 0.92, 1, 1] }, { duration: 0.7, times }))}
				d="M20 21a8 8 0 0 0-16 0"
				style={edge(0.5, 1)}
			/>
		</>
	),
});

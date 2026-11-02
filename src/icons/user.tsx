import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const times = [0, 0.2, 0.55, 1];

export default createAnimatedIcon({
	name: "user",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.92, 1, 1] }, { duration: 0.7, times }))}
				d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
				style={edge(0.5, 1)}
			/>
			<motion.circle {...part(pose({ y: [0, 1, -2.5, 0] }, { duration: 0.7, times }))} cx="12" cy="7" r="4" />
		</>
	),
});

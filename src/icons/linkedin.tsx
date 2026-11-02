import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const stem = pose({ scaleY: [1, 0.2, 1] }, { duration: 0.5, times: [0, 0.45, 1] });
const dot = pose({ scale: [1, 0.1, 1] }, { duration: 0.45, delay: 0.1, times: [0, 0.45, 1] });
const body = pose({ scaleY: [1, 0.35, 1] }, { duration: 0.5, delay: 0.2, times: [0, 0.45, 1] });

export default createAnimatedIcon({
	name: "linkedin",
	render: (part) => (
		<>
			<motion.rect {...part(stem)} height="12" style={edge(0.5, 1)} width="4" x="2" y="9" />
			<motion.circle {...part(dot)} cx="4" cy="4" r="2" style={centered} />
			<motion.path
				{...part(body)}
				d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
				style={edge(0.5, 1)}
			/>
		</>
	),
});

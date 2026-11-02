import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "airplay",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scale: [1, 1, 0.96, 1] }, { duration: 0.7, times: [0, 0.35, 0.6, 1] }))}
				d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
				style={centered}
			/>
			<motion.path
				{...part(
					pose({ y: [0, 3, -3, 0], opacity: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.4, 0.41, 1] }),
				)}
				d="m12 15 5 6H7Z"
			/>
		</>
	),
});

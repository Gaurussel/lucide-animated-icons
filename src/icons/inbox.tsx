import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const timing = { duration: 0.7, times: [0, 0.3, 0.6, 1] };

export default createAnimatedIcon({
	name: "inbox",
	render: (part) => (
		<>
			<motion.polyline
				{...part(pose({ y: [0, -1, 2, 0] }, { duration: 0.7, times: [0, 0.2, 0.55, 1] }))}
				points="22 12 16 12 14 15 10 15 8 12 2 12"
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.93, 1, 1] }, timing))}
				d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
				style={edge(0.5, 1)}
			/>
		</>
	),
});

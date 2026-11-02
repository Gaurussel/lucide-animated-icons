import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "atom",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 0.6, 1.6, 1] }, { duration: 0.8, times: [0, 0.4, 0.7, 1] }))}
				cx="12"
				cy="12"
				r="1"
				style={centered}
			/>
			<motion.path
				{...part(pose({ rotate: [0, 30, 0] }, { duration: 0.8, times: [0, 0.5, 1] }))}
				d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
				style={centered}
			/>
			<motion.path
				{...part(pose({ rotate: [0, -30, 0] }, { duration: 0.8, times: [0, 0.5, 1] }))}
				d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
				style={centered}
			/>
		</>
	),
});

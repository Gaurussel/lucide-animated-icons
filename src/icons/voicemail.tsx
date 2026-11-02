import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const reel = (delay: number) => pose({ scale: [1, 1.25, 1] }, { duration: 0.45, delay });

export default createAnimatedIcon({
	name: "voicemail",
	render: (part) => (
		<>
			<motion.circle {...part(reel(0))} cx="6" cy="12" r="4" style={centered} />
			<motion.circle {...part(reel(0.2))} cx="18" cy="12" r="4" style={centered} />
			<motion.line
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.8, times: [0, 0.45, 0.65, 1] }))}
				x1="6"
				x2="18"
				y1="16"
				y2="16"
			/>
		</>
	),
});

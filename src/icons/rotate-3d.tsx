import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "rotate-3d",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -14, 360] }, { duration: 0.9, times: [0, 0.15, 1], reset: true }))}
				style={centered}
			>
				<path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2" />
				<motion.path
					{...part(pose({ scale: [1, 1, 1.3, 1, 1] }, { duration: 0.9, times: [0, 0.4, 0.6, 0.8, 1] }))}
					d="m15.194 13.707 3.814 1.86-1.86 3.814"
					style={centered}
				/>
				<path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4" />
			</motion.g>
		</>
	),
});

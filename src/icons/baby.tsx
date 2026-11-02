import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "baby",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -18, -18, 0, 0] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] }))}
				style={centered}
			>
				<motion.path
					{...part(pose({ scaleX: [1, 1, 1, 1.8, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] }))}
					d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"
					style={centered}
				/>
				<motion.path
					{...part(pose({ opacity: [1, 1, 0, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] }))}
					d="M15 12h.01"
				/>
				<path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
				<motion.path
					{...part(pose({ opacity: [1, 1, 0, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] }))}
					d="M9 12h.01"
				/>
			</motion.g>
		</>
	),
});

import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "air-vent",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ y: [0, 3, -3, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.5, delay: 0.1, times: [0, 0.4, 0.41, 1] },
					),
				)}
				d="M18 17.5a2.5 2.5 0 1 1-4 2.03V12"
			/>
			<path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
			<motion.path
				{...part(pose({ scaleX: [1, 0.75, 1] }, { duration: 0.75, times: [0, 0.3, 1] }))}
				d="M6 8h12"
				style={centered}
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, 3, -3, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.5, delay: 0.22, times: [0, 0.4, 0.41, 1] },
					),
				)}
				d="M6.6 15.572A2 2 0 1 0 10 17v-5"
			/>
		</>
	),
});

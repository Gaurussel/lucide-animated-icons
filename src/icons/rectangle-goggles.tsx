import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "rectangle-goggles",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ y: [0, 1, -2.5, -2.5, 0], rotate: [0, -1.364, -3, -3, 0] },
						{ duration: 0.7, times: [0, 0.25, 0.55, 0.75, 1] },
					),
				)}
				d="M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
				style={centered}
			/>
		</>
	),
});

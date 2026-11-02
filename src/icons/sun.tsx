import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "sun",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 1.18, 1] }, { duration: 0.85, times: [0, 0.55, 1] }))}
				cx="12"
				cy="12"
				r="4"
				style={centered}
			/>
			<motion.g
				{...part(
					pose(
						{ rotate: [0, -10, 360], scale: [1, 0.85, 1] },
						{ duration: 0.85, times: [0, 0.2, 1], reset: true },
					),
				)}
				style={centered}
			>
				<path d="M12 2v2" />
				<path d="M12 20v2" />
				<path d="m4.93 4.93 1.41 1.41" />
				<path d="m17.66 17.66 1.41 1.41" />
				<path d="M2 12h2" />
				<path d="M20 12h2" />
				<path d="m6.34 17.66-1.41 1.41" />
				<path d="m19.07 4.93-1.41 1.41" />
			</motion.g>
		</>
	),
});

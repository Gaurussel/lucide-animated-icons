import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "sun-dim",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 0.85, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				cx="12"
				cy="12"
				r="4"
				style={centered}
			/>
			<motion.g
				{...part(
					pose(
						{ scale: [1, 0.8, 1, 1], opacity: [1, 0.2, 1, 1] },
						{ duration: 0.8, times: [0, 0.3, 0.6, 1] },
					),
				)}
				style={pivot(12, 12)}
			>
				<path d="M12 4h.01" />
				<path d="M20 12h.01" />
				<path d="M12 20h.01" />
				<path d="M4 12h.01" />
				<path d="M17.657 6.343h.01" />
				<path d="M17.657 17.657h.01" />
				<path d="M6.343 17.657h.01" />
				<path d="M6.343 6.343h.01" />
			</motion.g>
		</>
	),
});

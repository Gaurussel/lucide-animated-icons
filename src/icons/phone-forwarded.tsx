import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "phone-forwarded",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ x: [0, -1, 4, -4, 0], opacity: [1, 1, 0, 0, 1] },
						{ duration: 0.9, times: [0, 0.4, 0.6, 0.61, 1] },
					),
				)}
			>
				<path d="M14 6h8" />
				<path d="m18 2 4 4-4 4" />
			</motion.g>
			<motion.path
				{...part(
					pose(
						{ rotate: [0, -12, 12, -8, 0, 0], y: [0, -1.5, -1.5, -1.5, 0, 0] },
						{ duration: 0.9, times: [0, 0.1, 0.25, 0.4, 0.5, 1] },
					),
				)}
				d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
				style={centered}
			/>
		</>
	),
});

import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "phone",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ rotate: [0, -12, 12, -8, 8, 0], y: [0, -1.5, -1.5, -1.5, -1.5, 0] },
						{ duration: 0.8, times: [0, 0.15, 0.3, 0.5, 0.7, 1] },
					),
				)}
				d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
				style={centered}
			/>
		</>
	),
});

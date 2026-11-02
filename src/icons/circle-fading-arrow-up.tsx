import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "circle-fading-arrow-up",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.9, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				style={pivot(12, 12)}
			>
				<path d="M12 2a10 10 0 0 1 7.38 16.75" />
				<path d="M2.5 8.875a10 10 0 0 0-.5 3" />
				<path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
				<path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
				<path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
			</motion.g>
			<motion.g
				{...part(
					pose(
						{ opacity: [1, 1, 0, 0, 1], y: [0, 1, -4, 4, 0] },
						{ duration: 0.75, times: [0, 0.18, 0.5, 0.51, 1] },
					),
				)}
			>
				<path d="m16 12-4-4-4 4" />
				<path d="M12 16V8" />
			</motion.g>
		</>
	),
});

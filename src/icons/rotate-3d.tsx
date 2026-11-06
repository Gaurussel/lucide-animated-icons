import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, springy } from "../helpers.ts";

const spinY = pose(
	{ scaleX: [1, 1, -0.2, 1.07, 1] },
	{ duration: 0.7, times: [0, 0.1, 0.38, 0.52, 1], ease: ["easeInOut", "easeIn", "easeOut", springy] },
);
const spinX = pose(
	{ scaleY: [1, 1, -0.2, 1.07, 1] },
	{ duration: 0.65, delay: 0.1, times: [0, 0.1, 0.4, 0.52, 1], ease: ["easeInOut", "easeIn", "easeOut", springy] },
);

export default createAnimatedIcon({
	name: "rotate-3d",
	render: (part) => (
		<>
			<motion.path
				{...part(spinY)}
				d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"
				style={pivot(12, 12)}
			/>
			<motion.g {...part(spinX)} style={pivot(12, 12)}>
				<path d="m15.194 13.707 3.814 1.86-1.86 3.814" />
				<path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4" />
			</motion.g>
		</>
	),
});

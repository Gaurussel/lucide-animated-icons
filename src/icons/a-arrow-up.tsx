import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, snap, springy } from "../helpers.ts";

export default createAnimatedIcon({
	name: "a-arrow-up",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ scale: [1, 1, 1.15, 1] },
						{ duration: 0.65, times: [0, 0.25, 0.45, 1], ease: ["easeInOut", snap, springy] },
					),
				)}
				style={edge(0, 1)}
			>
				<path d="M3.5 13h6" />
				<path d="m2 16 4.5-9 4.5 9" />
			</motion.g>
			<motion.g
				{...part(
					pose(
						{ y: [0, 2, -10, 8, 0], opacity: [1, 1, 0, 0, 1] },
						{
							duration: 0.65,
							times: [0, 0.15, 0.35, 0.36, 1],
							ease: ["easeInOut", "easeIn", "easeInOut", springy],
						},
					),
				)}
			>
				<path d="M18 16V7" />
				<path d="m14 11 4-4 4 4" />
			</motion.g>
		</>
	),
});

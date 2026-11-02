import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, springy } from "../helpers.ts";

const chase = (delay: number) =>
	pose(
		{ rotate: [0, -15, 360] },
		{ duration: 0.62, delay, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
	);

export default createAnimatedIcon({
	name: "recycle",
	render: (part) => (
		<>
			<motion.g {...part(chase(0))} style={pivot(12, 13)}>
				<path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
				<path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
			</motion.g>
			<motion.g {...part(chase(0.06))} style={pivot(12, 13)}>
				<path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
				<path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
			</motion.g>
			<motion.g {...part(chase(0.12))} style={pivot(12, 13)}>
				<path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
				<path d="m14 16-3 3 3 3" />
			</motion.g>
		</>
	),
});

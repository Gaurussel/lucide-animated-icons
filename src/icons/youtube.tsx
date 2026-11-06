import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, springy } from "../helpers.ts";

const press = pose(
	{ scale: [1, 0.92, 1.04, 1] },
	{ duration: 0.72, times: [0, 0.14, 0.32, 1], ease: ["easeInOut", "easeInOut", springy] },
);
const play = pose(
	{ x: [0, -0.6, 4.2, -3.6, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.72, times: [0, 0.14, 0.34, 0.35, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "youtube",
	render: (part) => (
		<>
			<motion.path
				{...part(press)}
				d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
				style={centered}
			/>
			<motion.path {...part(play)} d="m10 15 5-3-5-3z" />
		</>
	),
});

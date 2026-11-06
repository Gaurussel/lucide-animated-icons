import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, springy } from "../helpers.ts";

const drip = pose(
	{ y: [0, -0.6, 4.8, -3.6, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.36, 0.37, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "droplet",
	render: (part) => (
		<motion.g {...part(drip)}>
			<motion.path
				{...part(redraw(0.26, 0.42))}
				d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"
			/>
		</motion.g>
	),
});

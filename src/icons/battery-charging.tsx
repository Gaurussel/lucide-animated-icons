import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pose, redraw, snap, springy } from "../helpers.ts";

const bolt = pose(
	{ y: [0, -3, 1.2, 0] },
	{ duration: 0.72, times: [0, 0.2, 0.32, 1], ease: ["easeInOut", "easeIn", springy] },
);
const spark = pose(
	{ x: [0, 0, 1.5, 0] },
	{ duration: 0.72, times: [0, 0.36, 0.44, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "battery-charging",
	render: (part) => (
		<>
			<motion.g {...part(bolt)}>
				<motion.path {...part(redraw(0, 0.35))} d="m11 7-3 5h4l-3 5" />
			</motion.g>
			<motion.g {...part(jelly(0.3, 0.7))} style={centered}>
				<path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935" />
				<path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936" />
			</motion.g>
			<motion.path {...part(spark)} d="M22 14v-4" />
		</>
	),
});

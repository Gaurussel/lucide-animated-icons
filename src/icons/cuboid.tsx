import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, rubber } from "../helpers.ts";

const tumble = pose(
	{ y: [0, 0.6, -1.8, 0], rotate: [0, -2.4, 8.4, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", "easeOut", rubber] },
);

export default createAnimatedIcon({
	name: "cuboid",
	render: (part) => (
		<motion.g {...part(tumble)} style={pivot(11, 22)}>
			<path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z" />
			<motion.path {...part(redraw(0.25, 0.4))} d="M10 22v-8L2.25 9.15" />
			<motion.path {...part(redraw(0.32, 0.4))} d="m10 14 11.77-6.87" />
		</motion.g>
	),
});

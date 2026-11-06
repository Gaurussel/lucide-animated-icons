import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const sender = pose(
	{ x: [0, -1.2, 0], scale: [1, 1.18, 1] },
	{ duration: 0.6, times: [0, 0.25, 1], ease: [snap, springy] },
);
const receive = (direction: number) =>
	pose(
		{ x: [0, 1.8, 0], y: [0, 3 * direction, 0], scale: [1, 1.18, 1] },
		{ duration: 0.55, delay: 0.18, times: [0, 0.3, 1], ease: [snap, springy] },
	);

export default createAnimatedIcon({
	name: "share-2",
	render: (part) => (
		<>
			<motion.circle {...part(receive(-1))} cx="18" cy="5" r="3" style={centered} />
			<motion.circle {...part(sender)} cx="6" cy="12" r="3" style={centered} />
			<motion.circle {...part(receive(1))} cx="18" cy="19" r="3" style={centered} />
			<motion.line {...part(redraw(0.05, 0.45))} x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
			<motion.line {...part(redraw(0.05, 0.45))} x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
		</>
	),
});

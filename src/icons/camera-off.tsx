import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const focus = pose(
	{ rotate: [0, -54, -54, 0], scale: [1, 0.88, 0.88, 1] },
	{ duration: 0.75, times: [0, 0.25, 0.4, 1], ease: [snap, "easeInOut", ring] },
);
const recoil = pose(
	{ rotate: [0, 0, -8.4, 0], y: [0, 0, 0.9, 0] },
	{ duration: 0.75, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "camera-off",
	render: (part) => (
		<>
			<motion.g {...part(recoil)} style={pivot(12, 20)}>
				<path d="M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16" />
				<path d="M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5" />
				<motion.path {...part(focus)} d="M14.121 15.121A3 3 0 1 1 9.88 10.88" style={pivot(12, 13)} />
			</motion.g>
			<motion.line {...part(redraw(0.15, 0.4))} x1="2" x2="22" y1="2" y2="22" />
		</>
	),
});

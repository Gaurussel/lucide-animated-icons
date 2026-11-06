import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const ping = pose({ scale: [1, 1.72, 1] }, { duration: 0.5, times: [0, 0.25, 1], ease: [snap, springy] });

const receive = pose(
	{ y: [0, 0, -2.4, 0], rotate: [0, 0, -4.8, 0] },
	{ duration: 0.75, times: [0, 0.32, 0.45, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "house-wifi",
	render: (part) => (
		<motion.g {...part(receive)} style={pivot(12, 21)}>
			<motion.path
				{...part(jelly(0.45, 0.75))}
				d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
				style={edge(0.5, 1)}
			/>
			<motion.path {...part(ping)} d="M12 17h.01" style={centered} />
			<motion.path {...part(redraw(0.08, 0.3))} d="M9.5 13.866a4 4 0 0 1 5 .01" />
			<motion.path {...part(redraw(0.18, 0.3))} d="M7 10.754a8 8 0 0 1 10 0" />
		</motion.g>
	),
});

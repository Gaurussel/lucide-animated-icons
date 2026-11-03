import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pose, redraw, snap, springy } from "../helpers.ts";

const drop = pose(
	{ y: [0, -6, 1, 0], rotate: [0, -12, 0, 0] },
	{ duration: 0.7, times: [0, 0.28, 0.42, 1], ease: [snap, "easeIn", springy] },
);
const dot = pose(
	{ scale: [1, 1, 1.5, 1] },
	{ duration: 0.7, times: [0, 0.38, 0.5, 1], ease: ["easeInOut", snap, springy] },
);
const strike = pose({ scale: [1, 0.82, 1] }, { duration: 0.65, times: [0, 0.14, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "map-pin-x",
	render: (part) => (
		<>
			<motion.g {...part(drop)} style={edge(0.5, 1)}>
				<motion.g {...part(jelly(0.42, 0.7))} style={edge(0.5, 1)}>
					<path d="M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077" />
					<motion.circle {...part(dot)} cx="12" cy="10" r="3" style={centered} />
				</motion.g>
			</motion.g>
			<motion.g {...part(strike)} style={centered}>
				<motion.path {...part(redraw(0.05, 0.35))} d="m21.5 15.5-5 5" />
				<motion.path {...part(redraw(0.22, 0.35))} d="m21.5 20.5-5-5" />
			</motion.g>
		</>
	),
});

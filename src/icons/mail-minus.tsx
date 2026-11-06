import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const flap = pose({ scaleY: [1, -0.02, 1] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });
const flick = pose(
	{ x: [0, -1.2, 3, 0], opacity: [1, 1, 0, 1] },
	{ duration: 0.65, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "mail-minus",
	render: (part) => (
		<>
			<motion.g {...part(jelly(0.02, 0.65))} style={edge(0.5, 1)}>
				<path d="M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
				<motion.path {...part(flap)} d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" style={edge(0.5, 0)} />
			</motion.g>
			<motion.path {...part(flick)} d="M16 19h6" />
		</>
	),
});

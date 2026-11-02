import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const send = pose({ scale: [1, 0.75, 1] }, { duration: 0.6, times: [0, 0.25, 1], ease: [snap, springy] });
const receive = pose(
	{ scale: [1, 1, 1.3, 1], rotate: [0, 0, 15, 0] },
	{ duration: 0.7, times: [0, 0.35, 0.5, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "workflow",
	render: (part) => (
		<>
			<motion.rect {...part(send)} height="8" rx="2" style={centered} width="8" x="3" y="3" />
			<motion.path {...part(redraw(0.05, 0.45))} d="M7 11v4a2 2 0 0 0 2 2h4" />
			<motion.rect {...part(receive)} height="8" rx="2" style={centered} width="8" x="13" y="13" />
		</>
	),
});

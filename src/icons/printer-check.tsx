import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, redraw, snap, springy } from "../helpers.ts";

const feedIn = pose(
	{ y: [0, -0.9, 1.8, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", "easeIn", springy] },
);
const feedOut = pose(
	{ y: [0, 0, 1.8, 0] },
	{ duration: 0.7, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "printer-check",
	render: (part) => (
		<>
			<motion.path {...part(feedIn)} d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
			<motion.path
				{...part(jelly(0.3, 0.7))}
				d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2"
				style={edge(0.5, 1)}
			/>
			<motion.path {...part(feedOut)} d="M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5" />
			<motion.path {...part(redraw(0.42, 0.3))} d="m16 19 2 2 4-4" />
		</>
	),
});

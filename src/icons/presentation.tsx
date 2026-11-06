import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, redraw, springy } from "../helpers.ts";

const drop = pose(
	{ y: [0, -2.4, 0.6, 0] },
	{ duration: 0.7, times: [0, 0.18, 0.3, 1], ease: ["easeInOut", "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "presentation",
	render: (part) => (
		<>
			<motion.path {...part(drop)} d="M2 3h20" />
			<motion.path {...part(redraw(0.22, 0.4))} d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
			<motion.path {...part(jelly(0.5, 0.75))} d="m7 21 5-5 5 5" style={edge(0.5, 1)} />
		</>
	),
});

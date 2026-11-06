import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, redraw, snap, springy } from "../helpers.ts";

const plug = pose(
	{ y: [0, 2.4, -0.9, 0] },
	{ duration: 0.75, times: [0, 0.2, 0.36, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "hdmi-port",
	render: (part) => (
		<motion.g {...part(plug)}>
			<motion.path
				{...part(jelly(0.36, 0.75))}
				d="M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z"
				style={edge(0.5, 0)}
			/>
			<motion.path {...part(redraw(0.3, 0.35))} d="M7.5 12h9" />
		</motion.g>
	),
});

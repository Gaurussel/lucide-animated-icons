import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const plug = pose(
	{ y: [0, -2.1, 0.6, 0] },
	{ duration: 0.7, times: [0, 0.2, 0.32, 1], ease: [snap, "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "ethernet-port",
	render: (part) => (
		<motion.g {...part(plug)}>
			<path d="m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z" />
			<motion.path {...part(redraw(0.28, 0.25))} d="M6 8v1" />
			<motion.path {...part(redraw(0.34, 0.25))} d="M10 8v1" />
			<motion.path {...part(redraw(0.4, 0.25))} d="M14 8v1" />
			<motion.path {...part(redraw(0.46, 0.25))} d="M18 8v1" />
		</motion.g>
	),
});

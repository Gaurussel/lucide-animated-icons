import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, -1.8, 0], rotate: [0, -3.6, 0] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "cloud-check",
	render: (part) => (
		<>
			<motion.path {...part(lift)} d="M5 17.743A7 7 0 1 1 15.71 10h1.79a4.5 4.5 0 0 1 1.5 8.742" />
			<motion.path {...part(redraw(0.12, 0.45))} d="m17 15-5.5 5.5L9 18" />
		</>
	),
});

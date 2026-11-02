import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const launch = pose(
	{ y: [0, -10, 0], opacity: [1, 0, 1] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);
const dip = pose({ y: [0, 2, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "cloud-upload",
	render: (part) => (
		<>
			<motion.path {...part(dip)} d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
			<motion.g {...part(launch)}>
				<motion.path {...part(redraw(0.2, 0.35))} d="M12 13v8" />
				<motion.path {...part(redraw(0.25, 0.35))} d="m8 17 4-4 4 4" />
			</motion.g>
		</>
	),
});

import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const dash = (delay: number) =>
	pose({ x: [0, -5, 0] }, { duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "rewind",
	render: (part) => (
		<>
			<motion.polygon {...part(dash(0))} points="11 19 2 12 11 5 11 19" />
			<motion.polygon {...part(dash(0.1))} points="22 19 13 12 22 5 22 19" />
		</>
	),
});

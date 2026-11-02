import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, ring, snap, springy } from "../helpers.ts";

const press = pose({ y: [0, -3, 3, 0] }, { duration: 0.7, times: [0, 0.2, 0.32, 1], ease: [snap, "easeIn", springy] });
const handle = pose(
	{ y: [0, 0, 1.5, 0] },
	{ duration: 0.6, delay: 0.08, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "stamp",
	render: (part) => (
		<>
			<motion.g {...part(press)}>
				<motion.path {...part(handle)} d="M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13" />
				<path d="M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z" />
			</motion.g>
			<motion.path {...part(redraw(0.24, 0.4))} d="M5 22h14" />
		</>
	),
});

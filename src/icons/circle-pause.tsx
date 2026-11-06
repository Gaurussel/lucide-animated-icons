import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const press = pose({ scale: [1, 0.93, 1] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });
const bar = (y: number, delay: number) =>
	pose({ y: [0, y, 0] }, { duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "circle-pause",
	render: (part) => (
		<>
			<motion.circle {...part(press)} cx="12" cy="12" r="10" style={centered} />
			<motion.line {...part(bar(-3, 0))} x1="10" x2="10" y1="15" y2="9" />
			<motion.line {...part(bar(3, 0.06))} x1="14" x2="14" y1="15" y2="9" />
		</>
	),
});

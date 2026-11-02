import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const weave = (x: number, y: number) =>
	pose({ x: [0, 3 * x, 0], y: [0, 3 * y, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "hash",
	render: (part) => (
		<>
			<motion.line {...part(weave(-1, 0))} x1="4" x2="20" y1="9" y2="9" />
			<motion.line {...part(weave(1, 0))} x1="4" x2="20" y1="15" y2="15" />
			<motion.line {...part(weave(0, -1))} x1="10" x2="8" y1="3" y2="21" />
			<motion.line {...part(weave(0, 1))} x1="16" x2="14" y1="3" y2="21" />
		</>
	),
});

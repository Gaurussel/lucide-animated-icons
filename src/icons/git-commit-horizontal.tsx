import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, ring, snap, springy } from "../helpers.ts";

const bead = pose(
	{ x: [0, -3, 4, 0] },
	{ duration: 0.75, times: [0, 0.18, 0.36, 1], ease: ["easeInOut", snap, springy] },
);
const hit = pose({ x: [0, 0, 2, 0] }, { duration: 0.75, times: [0, 0.3, 0.38, 1], ease: ["easeInOut", snap, ring] });

export default createAnimatedIcon({
	name: "git-commit-horizontal",
	render: (part) => (
		<>
			<motion.line {...part(redraw(0.2, 0.4))} x1="3" x2="9" y1="12" y2="12" />
			<motion.circle {...part(bead)} cx="12" cy="12" r="3" />
			<motion.line {...part(hit)} x1="15" x2="21" y1="12" y2="12" />
		</>
	),
});

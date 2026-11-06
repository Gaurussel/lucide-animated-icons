import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, ring, snap } from "../helpers.ts";

const kick = pose(
	{ y: [0, 0, -1.5, 0] },
	{ duration: 0.72, times: [0, 0.3, 0.38, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "activity",
	render: (part) => (
		<motion.g {...part(kick)}>
			<motion.path
				{...part(redraw(0, 0.45))}
				d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
			/>
		</motion.g>
	),
});

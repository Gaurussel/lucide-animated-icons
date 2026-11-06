import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap } from "../helpers.ts";

const swing = pose(
	{ rotate: [0, 6, -14.4, 0] },
	{ duration: 0.75, times: [0, 0.14, 0.3, 1], ease: ["easeInOut", snap, ring] },
);
const cable = pose(
	{ x: [0, 0, -1.2, 0], y: [0, 0, -0.9, 0], rotate: [0, 0, -8.4, 0] },
	{ duration: 0.75, times: [0, 0.22, 0.4, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "mic-vocal",
	render: (part) => (
		<>
			<motion.g {...part(swing)} style={pivot(7, 17)}>
				<path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12" />
				<circle cx="16" cy="7" r="5" />
			</motion.g>
			<motion.path
				{...part(cable)}
				d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"
				style={pivot(6, 18)}
			/>
		</>
	),
});

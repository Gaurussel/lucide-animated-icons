import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const aim = pose(
	{ rotate: [0, 4, -14, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.32, 1], ease: ["easeInOut", snap, ring] },
);
const extend = pose(
	{ x: [0, 0, 2.5, 0], y: [0, 0, -0.8, 0] },
	{ duration: 0.6, delay: 0.12, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "telescope",
	render: (part) => (
		<>
			<motion.g {...part(aim)} style={pivot(12, 13)}>
				<path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" />
				<path d="m13.56 11.747 4.332-.924" />
				<motion.path
					{...part(extend)}
					d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"
				/>
				<path d="m6.158 8.633 1.114 4.456" />
			</motion.g>
			<path d="m16 21-3.105-6.21" />
			<path d="m8 21 3.105-6.21" />
			<circle cx="12" cy="13" r="2" />
		</>
	),
});

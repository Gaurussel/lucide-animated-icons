import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const plant = pose(
	{ y: [0, -5, 0, 0, 0], rotate: [0, 0, 0, 12, 0] },
	{ duration: 0.85, times: [0, 0.25, 0.5, 0.75, 1] },
);
const land = pose({ scaleY: [1, 1, 0.6, 1, 1] }, { duration: 0.85, times: [0, 0.25, 0.5, 0.75, 1] });

export default createAnimatedIcon({
	name: "land-plot",
	render: (part) => (
		<>
			<motion.g {...part(land)} style={pivot(12, 16)}>
				<path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" />
				<path d="m6.49 12.85 11.02 6.3" />
				<path d="M17.51 12.85 6.5 19.15" />
			</motion.g>
			<motion.path {...part(plant)} d="m12 8 6-3-6-3v10" style={pivot(12, 12)} />
		</>
	),
});

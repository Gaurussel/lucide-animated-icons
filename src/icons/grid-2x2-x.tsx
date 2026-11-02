import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

const press = pose({ scale: [1, 0.95, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.5, 1] });
const cross = pose(
	{ scale: [1, 0, 0, 1], rotate: [0, 90, 90, 0] },
	{ duration: 0.8, delay: 0.1, times: [0, 0.3, 0.55, 1] },
);

export default createAnimatedIcon({
	name: "grid-2x2-x",
	render: (part) => (
		<>
			<motion.path
				{...part(press)}
				d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
				style={pivot(3, 21)}
			/>
			<motion.g {...part(cross)} style={centered}>
				<path d="m16 16 5 5" />
				<path d="m16 21 5-5" />
			</motion.g>
		</>
	),
});

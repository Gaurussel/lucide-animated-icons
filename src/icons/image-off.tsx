import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const tilt = pose({ rotate: [0, -6, -6, 0] }, { duration: 0.8, times: [0, 0.3, 0.7, 1] });

export default createAnimatedIcon({
	name: "image-off",
	render: (part) => (
		<>
			<motion.line
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.2, 0.5, 1] }))}
				x1="2"
				x2="22"
				y1="2"
				y2="22"
			/>
			<motion.g {...part(tilt)} style={pivot(12, 3)}>
				<path d="M10.41 10.41a2 2 0 1 1-2.83-2.83" />
				<line x1="13.5" x2="6" y1="13.5" y2="21" />
				<line x1="18" x2="21" y1="12" y2="15" />
				<path d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" />
				<path d="M21 15V5a2 2 0 0 0-2-2H9" />
			</motion.g>
		</>
	),
});

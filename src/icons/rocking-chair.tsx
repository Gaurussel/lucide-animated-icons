import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "rocking-chair",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -8, 7, -3, 0] }, { duration: 0.9, times: [0, 0.2, 0.5, 0.8, 1] }))}
				style={pivot(12, 22)}
			>
				<polyline points="3.5 2 6.5 12.5 18 12.5" />
				<line x1="9.5" x2="5.5" y1="12.5" y2="20" />
				<line x1="15" x2="18.5" y1="12.5" y2="20" />
				<motion.path
					{...part(pose({ x: [0, -1.5, 1.5, -0.5, 0] }, { duration: 0.9, times: [0, 0.2, 0.5, 0.8, 1] }))}
					d="M2.75 18a13 13 0 0 0 18.5 0"
				/>
			</motion.g>
		</>
	),
});

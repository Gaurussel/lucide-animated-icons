import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "aperture",
	render: (part) => (
		<>
			<circle cx="12" cy="12" r="10" />
			<motion.g
				{...part(pose({ rotate: [0, -30, 0], scale: [1, 0.7, 1] }, { duration: 0.8, times: [0, 0.45, 1] }))}
				style={pivot(12, 12)}
			>
				<path d="m14.31 8 5.74 9.94" />
				<path d="M9.69 8h11.48" />
				<path d="m7.38 12 5.74-9.94" />
				<path d="M9.69 16 3.95 6.06" />
				<path d="M14.31 16H2.83" />
				<path d="m16.62 12-5.74 9.94" />
			</motion.g>
		</>
	),
});

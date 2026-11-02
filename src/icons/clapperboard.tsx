import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "clapperboard",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -18, -18, 0, 0] }, { duration: 0.8, times: [0, 0.3, 0.5, 0.65, 1] }))}
				style={pivot(3, 11)}
			>
				<path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
				<path d="m6.2 5.3 3.1 3.9" />
				<path d="m12.4 3.4 3.1 4" />
			</motion.g>
			<motion.path
				{...part(pose({ y: [0, 0, 0, 0.6, 0] }, { duration: 0.8, times: [0, 0.3, 0.5, 0.65, 1] }))}
				d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
			/>
		</>
	),
});

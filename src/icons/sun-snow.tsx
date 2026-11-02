import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "sun-snow",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 1, 0.85, 1, 1] }, { duration: 0.85, times: [0, 0.3, 0.55, 0.8, 1] }))}
				style={pivot(10, 12)}
			>
				<path d="M10 21v-1" />
				<path d="M10 4V3" />
				<path d="M10 9a3 3 0 0 0 0 6" />
				<path d="M2 12h1" />
				<path d="m3.64 18.36.7-.7" />
				<path d="m4.34 6.34-.7-.7" />
			</motion.g>
			<motion.g
				{...part(pose({ rotate: [0, -14, -14, 0, 0] }, { duration: 0.85, times: [0, 0.3, 0.55, 0.8, 1] }))}
				style={pivot(17, 12)}
			>
				<path d="m14 20 1.25-2.5L18 18" />
				<path d="m14 4 1.25 2.5L18 6" />
				<path d="m17 21-3-6 1.5-3H22" />
				<path d="m17 3-3 6 1.5 3" />
				<path d="m20 10-1.5 2 1.5 2" />
			</motion.g>
		</>
	),
});

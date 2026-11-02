import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const times = [0, 0.3, 0.6, 1];

export default createAnimatedIcon({
	name: "webhook-off",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, -1, 1, 0], opacity: [1, 0.35, 0.35, 1] }, { duration: 0.8, times }))}>
				<path d="M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15" />
				<path d="M9 3.4a4 4 0 0 1 6.52.66" />
				<path d="m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05" />
				<path d="M20.3 20.3a4 4 0 0 1-2.3.7" />
				<path d="M18.6 13a4 4 0 0 1 3.357 3.414" />
				<path d="m12 6 .6 1" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.45, 1] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});

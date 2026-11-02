import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const strum = pose({ rotate: [0, -10, 7, -4, 0] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] });
const string = pose(
	{ x: [0, 0, 0.8, -0.8, 0], y: [0, 0, -0.8, 0.8, 0] },
	{ duration: 0.8, delay: 0.1, times: [0, 0.2, 0.4, 0.6, 1] },
);

export default createAnimatedIcon({
	name: "guitar",
	render: (part) => (
		<motion.g {...part(strum)} style={centered}>
			<motion.path {...part(string)} d="m11.9 12.1 4.514-4.514" />
			<path d="M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z" />
			<path d="m6 16 2 2" />
			<motion.path
				{...part(
					pose({ scale: [1, 1, 1.05, 1, 1.03, 1] }, { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }),
				)}
				d="M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z"
				style={centered}
			/>
		</motion.g>
	),
});

import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const node = (delay: number) => pose({ scale: [1, 1.12, 1], opacity: [1, 0.4, 1] }, { duration: 0.5, delay });

export default createAnimatedIcon({
	name: "webhook",
	render: (part) => (
		<>
			<motion.path
				{...part(node(0))}
				d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"
				style={centered}
			/>
			<motion.path
				{...part(node(0.15))}
				d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"
				style={centered}
			/>
			<motion.path
				{...part(node(0.3))}
				d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"
				style={centered}
			/>
		</>
	),
});

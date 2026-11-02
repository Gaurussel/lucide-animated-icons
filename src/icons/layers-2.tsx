import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const top = pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.75, times: [0, 0.4, 0.6, 1] });
const bottom = pose({ y: [0, 2.5, 2.5, 0] }, { duration: 0.75, delay: 0.05, times: [0, 0.4, 0.6, 1] });

export default createAnimatedIcon({
	name: "layers-2",
	render: (part) => (
		<>
			<motion.path
				{...part(top)}
				d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z"
			/>
			<motion.path
				{...part(bottom)}
				d="m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845"
			/>
		</>
	),
});

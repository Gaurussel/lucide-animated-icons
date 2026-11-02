import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "subscript",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.9, 1, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				style={edge(0.5, 0.5)}
			>
				<path d="m4 5 8 8" />
				<path d="m12 5-8 8" />
			</motion.g>
			<motion.path
				{...part(pose({ y: [0, 2, 2, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"
			/>
		</>
	),
});

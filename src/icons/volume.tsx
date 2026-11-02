import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "volume",
	render: (part) => (
		<motion.path
			{...part(pose({ scale: [1, 1.15, 1, 1.15, 1] }, { duration: 0.7 }))}
			d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
			style={edge(0.2, 0.5)}
		/>
	),
});

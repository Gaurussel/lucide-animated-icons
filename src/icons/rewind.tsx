import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "rewind",
	render: (part) => (
		<>
			<motion.polygon
				{...part(pose({ x: [0, 1.5, -3, 0, 0] }, { duration: 0.8, times: [0, 0.15, 0.5, 0.8, 1] }))}
				points="11 19 2 12 11 5 11 19"
			/>
			<motion.polygon
				{...part(pose({ x: [0, 1.5, -3, 0, 0] }, { duration: 0.8, times: [0, 0.27, 0.62, 0.92, 1] }))}
				points="22 19 13 12 22 5 22 19"
			/>
		</>
	),
});

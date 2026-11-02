import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const stem = pose({ pathLength: [1, 0, 1] }, { duration: 0.5, times: [0, 0.35, 1] });
const blade = pose({ scale: [1, 0.8, 1], rotate: [0, -6, 0] }, { duration: 0.5, delay: 0.3, times: [0, 0.4, 1] });

export default createAnimatedIcon({
	name: "leaf",
	render: (part) => (
		<>
			<motion.path {...part(stem)} d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
			<motion.path
				{...part(blade)}
				d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
				style={pivot(11, 20)}
			/>
		</>
	),
});

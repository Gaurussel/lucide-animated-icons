import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

const shrink = pose({ scale: [1, 0.85, 0.85, 1] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] });
const minus = pose({ scaleX: [1, 0.1, 0.1, 1], x: [0, 1, 1, 0] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] });

export default createAnimatedIcon({
	name: "heart-minus",
	render: (part) => (
		<>
			<motion.path
				{...part(shrink)}
				d="M13.5 19.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5A5.5 5.5 0 0 1 7.5 3c1.76 0 3 .5 4.5 2 1.5-1.5 2.74-2 4.5-2a5.5 5.5 0 0 1 5.402 6.5"
				style={pivot(12, 12)}
			/>
			<motion.path {...part(minus)} d="M15 15h6" style={centered} />
		</>
	),
});

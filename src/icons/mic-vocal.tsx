import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "mic-vocal",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -9, 0, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				style={pivot(6, 17)}
			>
				<path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12" />
				<motion.circle
					{...part(pose({ scale: [1, 0.85, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.55, 1] }))}
					cx="16"
					cy="7"
					r="5"
					style={centered}
				/>
			</motion.g>
			<motion.path
				{...part(pose({ y: [0, 0, 1.2, -0.8, 0] }, { duration: 0.8, times: [0, 0.3, 0.5, 0.75, 1] }))}
				d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"
			/>
		</>
	),
});

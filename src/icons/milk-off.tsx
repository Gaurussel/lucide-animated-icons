import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "milk-off",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -14, -14, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}
				style={pivot(12, 22)}
			>
				<path d="M8 2h8" />
				<path d="M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3" />
				<motion.path
					{...part(pose({ rotate: [0, 14, 14, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}
					d="M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435"
					style={pivot(12, 16)}
				/>
			</motion.g>
			<motion.line
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.35, 0.55, 1] }))}
				x1="2"
				x2="22"
				y1="2"
				y2="22"
			/>
		</>
	),
});

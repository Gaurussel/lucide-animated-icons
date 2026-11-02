import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "milk",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -14, -14, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}
			style={pivot(12, 22)}
		>
			<path d="M8 2h8" />
			<path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" />
			<motion.path
				{...part(pose({ rotate: [0, 14, 14, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}
				d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"
				style={pivot(12, 16)}
			/>
		</motion.g>
	),
});

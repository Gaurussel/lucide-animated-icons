import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "pencil-off",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -6, 0, 0] }, { duration: 0.8, times: [0, 0.2, 0.4, 1] }))}
				style={edge(0, 1)}
			>
				<path d="m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982" />
				<path d="m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" />
				<path d="m15 5 4 4" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.8, times: [0, 0.4, 0.55, 1] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});

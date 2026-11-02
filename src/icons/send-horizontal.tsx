import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "send-horizontal",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ x: [0, -1.5, 10, -8, 0], opacity: [1, 1, 0, 0, 1] },
						{ duration: 0.75, times: [0, 0.18, 0.55, 0.56, 1] },
					),
				)}
			>
				<path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
				<motion.path
					{...part(pose({ scaleX: [1, 1, 0.3, 0.3, 1] }, { duration: 0.75, times: [0, 0.2, 0.5, 0.56, 1] }))}
					d="M6 12h16"
					style={edge(1, 0.5)}
				/>
			</motion.g>
		</>
	),
});

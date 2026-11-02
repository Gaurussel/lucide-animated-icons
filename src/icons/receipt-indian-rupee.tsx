import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "receipt-indian-rupee",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -2, -2, 0] }, { duration: 0.7, times: [0, 0.3, 0.65, 1] }))}>
				<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
				<motion.g
					{...part(pose({ scale: [1, 1, 0.8, 1] }, { duration: 0.7, times: [0, 0.4, 0.7, 1] }))}
					style={centered}
				>
					<path d="M8 7h8" />
					<path d="M12 17.5 8 15h1a4 4 0 0 0 0-8" />
					<path d="M8 11h8" />
				</motion.g>
			</motion.g>
		</>
	),
});

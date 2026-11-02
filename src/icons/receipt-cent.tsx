import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "receipt-cent",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -2, -2, 0] }, { duration: 0.7, times: [0, 0.3, 0.65, 1] }))}>
				<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
				<motion.g
					{...part(pose({ scale: [1, 1, 0.8, 1] }, { duration: 0.7, times: [0, 0.4, 0.7, 1] }))}
					style={centered}
				>
					<path d="M12 6.5v11" />
					<path d="M15 9.4a4 4 0 1 0 0 5.2" />
				</motion.g>
			</motion.g>
		</>
	),
});

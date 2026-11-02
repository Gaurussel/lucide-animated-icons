import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bike",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, -1.5, 2, 0] }, { duration: 0.8, times: [0, 0.2, 0.6, 1] }))}>
				<circle cx="18.5" cy="17.5" r="3.5" />
				<circle cx="5.5" cy="17.5" r="3.5" />
				<circle cx="15" cy="5" r="1" />
				<motion.path
					{...part(pose({ y: [0, 0, -1, 0] }, { duration: 0.8, times: [0, 0.2, 0.6, 1] }))}
					d="M12 17.5V14l-3-3 4-3 2 3h2"
				/>
			</motion.g>
		</>
	),
});

import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "mouse-off",
	render: (part) => (
		<>
			<motion.g {...part(pose({ opacity: [1, 0.35, 0.35, 1] }, { duration: 0.8, times: [0, 0.5, 0.75, 1] }))}>
				<path d="M12 6v.343" />
				<path d="M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218" />
				<path d="M19 13.343V9A7 7 0 0 0 8.56 2.902" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.6, 1] }))}
				d="M22 22 2 2"
			/>
		</>
	),
});

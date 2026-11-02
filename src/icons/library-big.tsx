import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const shelf = pose({ y: [0, -2.5, 0] }, { duration: 0.75, times: [0, 0.4, 1] });
const book = pose({ rotate: [0, -6, 12, 0] }, { duration: 0.75, delay: 0.1, times: [0, 0.25, 0.6, 1] });

export default createAnimatedIcon({
	name: "library-big",
	render: (part) => (
		<>
			<motion.g {...part(shelf)}>
				<rect height="18" rx="1" width="8" x="3" y="3" />
				<path d="M7 3v18" />
			</motion.g>
			<motion.path
				{...part(book)}
				d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"
				style={pivot(13, 20)}
			/>
		</>
	),
});

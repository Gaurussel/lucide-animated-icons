import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const timing = { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] };

export default createAnimatedIcon({
	name: "languages",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -2, 0, 0, 0] }, timing))}>
				<path d="m5 8 6 6" />
				<path d="m4 14 6-6 2-3" />
				<path d="M2 5h12" />
				<path d="M7 2h1" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, 0, 0, -2, 0] }, timing))}>
				<path d="m22 22-5-10-5 10" />
				<path d="M14 18h6" />
			</motion.g>
		</>
	),
});

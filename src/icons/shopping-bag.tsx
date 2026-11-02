import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "shopping-bag",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, 0, 2, 0] }, { duration: 0.7, times: [0, 0.3, 0.65, 1] }))}>
				<path d="M16 10a4 4 0 0 1-8 0" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, -1.5, 0, 0] }, { duration: 0.7, times: [0, 0.35, 0.7, 1] }))}>
				<path d="M3.103 6.034h17.794" />
				<path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
			</motion.g>
		</>
	),
});

import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

const wobble = pose({ rotate: [0, -8, 6, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] });
const bone = pose({ rotate: [0, 0, 18, -10, 0] }, { duration: 0.8, delay: 0.1, times: [0, 0.2, 0.45, 0.7, 1] });

export default createAnimatedIcon({
	name: "ham",
	render: (part) => (
		<motion.g {...part(wobble)} style={centered}>
			<path d="M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856" />
			<path d="M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288" />
			<motion.path
				{...part(bone)}
				d="M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025"
				style={pivot(14.5, 11.5)}
			/>
			<path d="m8.5 16.5-1-1" />
		</motion.g>
	),
});

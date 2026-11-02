import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "traffic-cone",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -10, -10, 0] }, { duration: 0.8, times: [0, 0.2, 0.45, 1] }))}
				style={pivot(12, 20)}
			>
				<path d="M16.05 10.966a5 2.5 0 0 1-8.1 0" />
				<path d="M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z" />
				<path d="M9.194 6.57a5 2.5 0 0 0 5.61 0" />
			</motion.g>
			<motion.path
				{...part(pose({ x: [0, 1.2, 1.2, 0] }, { duration: 0.8, times: [0, 0.2, 0.45, 1] }))}
				d="m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04"
			/>
		</>
	),
});

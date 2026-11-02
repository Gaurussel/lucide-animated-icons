import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "signature",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1, 1] }, { duration: 0.95, times: [0, 0.1, 0.15, 0.65, 1] }))}
				d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 0, 1] }, { duration: 0.95, times: [0, 0.1, 0.65, 0.7, 1] }))}
				d="M3 21h18"
			/>
		</>
	),
});

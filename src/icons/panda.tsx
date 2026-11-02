import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "panda",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, 0, -9, 0] }, { duration: 0.85, times: [0, 0.4, 0.7, 1] }))}
				style={pivot(12, 22)}
			>
				<path d="M18 6.5a.5.5 0 0 0-.5-.5" />
				<path d="M20.69 9.67a4.5 4.5 0 1 0-7.04-5.5 8.35 8.35 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5C2.49 11.2 2 12.88 2 14.5 2 19.47 6.48 22 12 22s10-2.53 10-7.5c0-1.62-.48-3.3-1.3-4.83" />
				<path d="M6 6.5a.495.495 0 0 1 .5-.5" />
				<motion.path
					{...part(pose({ scale: [1, 1, 1.4, 1] }, { duration: 0.85, times: [0, 0.4, 0.7, 1] }))}
					d="M11.25 17.25h1.5L12 18z"
					style={centered}
				/>
				<motion.path
					{...part(pose({ scaleY: [1, 0.1, 1, 1] }, { duration: 0.85, times: [0, 0.2, 0.4, 1] }))}
					d="m15 12 2 2"
					style={centered}
				/>
				<motion.path
					{...part(pose({ scaleY: [1, 0.1, 1, 1] }, { duration: 0.85, times: [0, 0.2, 0.4, 1] }))}
					d="m9 12-2 2"
					style={centered}
				/>
			</motion.g>
		</>
	),
});

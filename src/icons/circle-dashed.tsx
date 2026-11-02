import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "circle-dashed",
	render: (part) => (
		<motion.g
			{...part(pose({ scale: [1, 0.85, 0.85, 1] }, { duration: 0.8, times: [0, 0.25, 0.7, 1] }))}
			style={centered}
		>
			<motion.g {...part(pose({ rotate: 360 }, { duration: 0.8, reset: true }))} style={centered}>
				<path d="M10.1 2.182a10 10 0 0 1 3.8 0" />
				<path d="M13.9 21.818a10 10 0 0 1-3.8 0" />
				<path d="M17.609 3.721a10 10 0 0 1 2.69 2.7" />
				<path d="M2.182 13.9a10 10 0 0 1 0-3.8" />
				<path d="M20.279 17.609a10 10 0 0 1-2.7 2.69" />
				<path d="M21.818 10.1a10 10 0 0 1 0 3.8" />
				<path d="M3.721 6.391a10 10 0 0 1 2.7-2.69" />
				<path d="M6.391 20.279a10 10 0 0 1-2.69-2.7" />
			</motion.g>
		</motion.g>
	),
});

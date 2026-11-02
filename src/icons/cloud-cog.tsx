import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cloud-cog",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -1, 0] }, { duration: 0.8, times: [0, 0.4, 1] }))}
				d="M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"
			/>
			<motion.g
				{...part(pose({ rotate: [0, -14, 360] }, { duration: 0.85, times: [0, 0.2, 1], reset: true }))}
				style={pivot(12, 17)}
			>
				<path d="m10.852 19.772-.383.924" />
				<path d="m13.148 14.228.383-.923" />
				<path d="M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923" />
				<path d="m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544" />
				<path d="m14.772 15.852.923-.383" />
				<path d="m14.772 18.148.923.383" />
				<path d="m9.228 15.852-.923-.383" />
				<path d="m9.228 18.148-.923.383" />
			</motion.g>
		</>
	),
});

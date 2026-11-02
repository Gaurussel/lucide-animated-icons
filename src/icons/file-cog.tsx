import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "file-cog",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			<motion.g {...part(pose({ rotate: 360 }, { duration: 0.8, reset: true }))} style={pivot(6, 14)}>
				<path d="m2.305 15.53.923-.382" />
				<path d="m3.228 12.852-.924-.383" />
				<path d="m4.852 11.228-.383-.923" />
				<path d="m4.852 16.772-.383.924" />
				<path d="m7.148 11.228.383-.923" />
				<path d="m7.53 17.696-.382-.924" />
				<path d="m8.772 12.852.923-.383" />
				<path d="m8.772 15.148.923.383" />
				<circle cx="6" cy="14" r="3" />
			</motion.g>
			<path d="M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5" />
		</motion.g>
	),
});

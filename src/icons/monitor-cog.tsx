import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "monitor-cog",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -3, -3, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}>
			<motion.g
				{...part(pose({ rotate: [0, 0, 360] }, { duration: 0.8, times: [0, 0.3, 1], reset: true }))}
				style={pivot(18, 6)}
			>
				<path d="m14.305 7.53.923-.382" />
				<path d="m15.228 4.852-.923-.383" />
				<path d="m16.852 3.228-.383-.924" />
				<path d="m16.852 8.772-.383.923" />
				<path d="m19.148 3.228.383-.924" />
				<path d="m19.53 9.696-.382-.924" />
				<path d="m20.772 4.852.924-.383" />
				<path d="m20.772 7.148.924.383" />
				<circle cx="18" cy="6" r="3" />
			</motion.g>
			<path d="M12 17v4" />
			<path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
			<path d="M8 21h8" />
		</motion.g>
	),
});

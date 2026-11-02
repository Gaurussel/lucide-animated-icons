import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "chef-hat",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, 0, -2, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.8, 0.8, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M6 17h12"
				style={centered}
			/>
		</>
	),
});

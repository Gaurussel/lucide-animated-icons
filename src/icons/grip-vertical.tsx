import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const drag = (index: number) =>
	pose({ y: [0, -2, 0, 0], scale: [1, 1.35, 1, 1] }, { duration: 0.7, delay: index * 0.1, times: [0, 0.35, 0.7, 1] });

export default createAnimatedIcon({
	name: "grip-vertical",
	render: (part) => (
		<>
			<motion.circle {...part(drag(1))} cx="9" cy="12" r="1" style={centered} />
			<motion.circle {...part(drag(0))} cx="9" cy="5" r="1" style={centered} />
			<motion.circle {...part(drag(2))} cx="9" cy="19" r="1" style={centered} />
			<motion.circle {...part(drag(1))} cx="15" cy="12" r="1" style={centered} />
			<motion.circle {...part(drag(0))} cx="15" cy="5" r="1" style={centered} />
			<motion.circle {...part(drag(2))} cx="15" cy="19" r="1" style={centered} />
		</>
	),
});

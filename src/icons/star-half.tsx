import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "star-half",
	render: (part) => (
		<motion.path
			{...part(
				pose(
					{ scale: [1, 0.88, 1.2, 1.2, 1], rotate: [0, -10, 14, 6, 0] },
					{ duration: 0.7, times: [0, 0.2, 0.5, 0.7, 1] },
				),
			)}
			d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"
			style={centered}
		/>
	),
});

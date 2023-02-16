import { useMediaQuery } from "react-responsive";

export const useMediaQueries = () => {
	const isDesktop = useMediaQuery({ query: "(min-width: 992px)" });
	const isMobile = useMediaQuery({ query: "(min-width: 820px)" });

	return {
		isDesktop,
		isMobile
	};
};

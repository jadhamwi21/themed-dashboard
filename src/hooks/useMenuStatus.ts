import { useAppSelector } from "../store/store";

const useMenuStatus = () => {
	const MenuStatus = useAppSelector((state) => state.MenuStatus);

	return MenuStatus;
};

export default useMenuStatus;

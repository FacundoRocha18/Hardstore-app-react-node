import { Button } from '@nextui-org/react';

export const RemoveButton = () => {
	const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log('Delete button clicked');
	};

	return (
		<Button
			className="bg-danger-50 p-2 text-black rounded lg:bg-transparent lg:p-0 lg:text-primary"
			type="button"
			onClick={(e) => {
				handleDelete(e);
			}}>
			Eliminar del carrito
		</Button>
	);
};

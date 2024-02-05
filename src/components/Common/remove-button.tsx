import { Button } from '@nextui-org/react';
import { IconX } from '@tabler/icons-react';

export const RemoveButton = () => {
	const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log('Delete button clicked');
	};

	return (
		<Button
			className="btn btn-danger remove-item-btn"
			type="button"
			onClick={(e) => {
				handleDelete(e);
			}}>
			<IconX />
		</Button>
	);
};

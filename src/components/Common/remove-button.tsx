import { Button } from '@nextui-org/react';
import { IconX } from '@tabler/icons-react';

export const RemoveButton = () => {
	const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log('Delete button clicked');
	};

	return (
		<Button
			className="min-w-0 p-2 bg-transparent h-50 w-50"
			type="button"
			onClick={(e) => {
				handleDelete(e);
			}}>
			<IconX />
		</Button>
	);
};

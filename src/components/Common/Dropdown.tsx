import { type ReactNode } from 'react'
import { DropdownItem, DropdownMenu, DropdownTrigger, Dropdown as NextUIDropdown } from '@nextui-org/react'
import { type Item } from '../../common/interfaces'

export const Dropdown = ({ children, items }: { children: ReactNode, items: Item[] }) => {
  return (
		<NextUIDropdown>
			<DropdownTrigger>
				{
					children
				}
			</DropdownTrigger>
			<DropdownMenu aria-label='Dynamic Actions' items={items}>
				{
					items.map(item => (
						<DropdownItem
							key={item.id}
							color={item.color}
						>
							{item.label}
						</DropdownItem>
					))
				}
			</DropdownMenu>
		</NextUIDropdown>
  )
}

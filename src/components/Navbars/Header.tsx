import { useState } from 'react'
import { Link } from 'react-router-dom'

/* Components */
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle } from '@nextui-org/react'
import { IconChevronDown } from '@tabler/icons-react'
import { Dropdown } from '../Common/Dropdown'
import { Menu } from './Menu'

/* Common */
import { CATEGORIES_ITEMS, MOBILE_MAIN_MENU_ITEMS } from '../../common/constants'
import { CartButton } from '../Cart/cart-button'

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<Navbar
			height='7rem'
			maxWidth='xl'
			shouldHideOnScroll
			isBordered
			onMenuOpenChange={setIsMenuOpen}
		>
			<NavbarContent justify='start'>
				<NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className='sm:hidden' />
				<NavbarBrand>
					<Link to={'/'}><h1>Techie Store</h1></Link>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className="hidden items-center justify-between sm:flex gap-6" justify='end'>
				<NavbarItem>
					<Link className='text-base' to={'/'}>Inicio</Link>
				</NavbarItem>
				<NavbarItem>
					<Dropdown items={CATEGORIES_ITEMS}>
						<div className='flex items-center justify-between gap-1 cursor-pointer'>
							<p>Catálogo</p>
							<IconChevronDown size={16} />
						</div>
					</Dropdown>
				</NavbarItem>
				<NavbarItem>
					<Link
						className='flex items-center justify-between gap-2'
						to={'/products/shoppingCart'}
						title='Carrito de compras'
					>
						Carrito
					</Link>
				</NavbarItem>
				<NavbarItem>
					<CartButton products_quantity={5}/>
				</NavbarItem>
			</NavbarContent>
			<Menu items={MOBILE_MAIN_MENU_ITEMS} />
		</Navbar >
	)
}

export default Header

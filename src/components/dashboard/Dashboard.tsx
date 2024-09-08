
import React from 'react'
import defaultStyle from './Dashboard.module.scss'
import { useToggler, useWindowSize } from '../../hooks';
import { MaterialIcon } from '../material-icon';
import { TouchableOpacity } from '../touchable-opacity';

interface IMenuItem {
    title: string,
    path: string,
    basePath: string,
    icon: string,
    exact: boolean,
    fontSize?: number
}

interface IComponentProps {
    children: any,
    pathname: string,
    rightHeaderComponent?: any,
    leftHeaderComponent?: any,
    menuItems: IMenuItem[],
    appLogoLocation: string,
    onClickMenuItem(menuItem: IMenuItem): any,
    style: {
        bgColor: string,
        menuBgColor: string,
        menuItemBgColor: string,
        activeMenuItemBgColor: string,
        menuItemFontColor: string,
        menuItemIconColor: string,
        activeMenuItemFontColor?: string,
        activeMenuItemIconColor?: string
    }
}

export const Dashboard = ({ menuItems, pathname, children, onClickMenuItem, leftHeaderComponent, rightHeaderComponent, appLogoLocation, style }: IComponentProps) => {
    const menuToggler = useToggler(false);
    const windowSize = useWindowSize()

    return (
        <div className={defaultStyle.screen} style={{ background: style?.bgColor }}>
            <div className={menuToggler.value ? 'd-block d-md-block' : 'd-none d-md-block'}>
                <div
                    className={defaultStyle.smNavShadow}
                    onClickCapture={menuToggler.toggle}
                />

                <nav className={defaultStyle.navbar} style={{ background: style?.menuBgColor }}>
                    <div className={defaultStyle.navLogoArea}>
                        <img src={appLogoLocation} alt='' width={120} height={38} />
                    </div>

                    <div className={defaultStyle.menuItems}>
                        {menuItems
                            .map((menuItem) => {
                                const isActive = menuItem.exact && menuItem.basePath === pathname
                                    || !menuItem.exact && pathname?.startsWith(menuItem?.basePath)

                                const onClick = () => {
                                    if (windowSize.width < 768) menuToggler.toggle()
                                    onClickMenuItem(menuItem)
                                }

                                return (
                                    <div
                                        title={menuItem.path}
                                        key={menuItem?.title}
                                        onClickCapture={onClick}
                                    >
                                        <div
                                            style={{
                                                background: isActive ? (style.activeMenuItemBgColor || '#666') : (style.menuItemBgColor || '#bbb')
                                            }}
                                            className={isActive ? defaultStyle.activeMenuItem : defaultStyle.menuItem}
                                        >
                                            <>
                                                <span className='d-block d-flex align-items-center'>
                                                    <MaterialIcon
                                                        icon={menuItem.icon}
                                                        color={isActive ? (style?.activeMenuItemIconColor || 'primary') : (style?.menuItemIconColor || 'light')}
                                                        size='small'
                                                    />
                                                </span>
                                                <span
                                                    style={{
                                                        color: isActive ? (style.activeMenuItemFontColor || '#fff') : (style.menuItemFontColor || '#eee'),
                                                        fontSize: menuItem?.fontSize
                                                    }}
                                                    className={defaultStyle.menuCaption}
                                                >
                                                    {menuItem.title}
                                                </span>
                                            </> 
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </nav>
            </div>

            <div className={defaultStyle.content}>
                <header className={defaultStyle.topBar} style={{ background: style?.menuBgColor }}>
                    <div className="d-flex w-100 justify-content-between align-items-center px-2">
                        <div className='w-100 d-flex align-items-center'>
                            <span className={`d-inline d-md-none`}>
                                <TouchableOpacity onClick={menuToggler.toggle}>
                                    <MaterialIcon icon="menu" size='medium' color='primary' />
                                </TouchableOpacity>
                            </span>

                            <span className='ms-1 d-flex align-items-center'>
                                {leftHeaderComponent}
                            </span>
                        </div>

                        <span>
                            {rightHeaderComponent}
                        </span>
                    </div>
                </header>

                <main className={defaultStyle.main}>
                    {children}
                </main>
            </div>
        </div>
    )
}

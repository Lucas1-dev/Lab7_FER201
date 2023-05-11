import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Icon, Navbar, NavItem } from 'react-materialize';
const pages = ['Home', 'About', 'News'];
function ResponsiveAppBar() {
    const { user, logOut } = UserAuth();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error);
        }
    }
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <Navbar
            alignLinks="right"
            className='bg-blue-500'
            brand={<Link to="/"><a className="brand-logo">Logo</a></Link>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
        >
            <ul>
                <li><Link to='/'><Icon left>home</Icon>Home</Link></li>
                <li to='/about'><Link to='about'><Icon left>info_outline</Icon>About</Link></li>
                <li to='/news'><Link to='news'><Icon left>chrome_reader_mode</Icon>News</Link></li>
            </ul>
            <Box sx={{ flexGrow: 0 }}>
                {user?.displayName ? (
                    <div>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={user.email} src={user.photoURL} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center" ><Link to='/dashboard' style={{ textDecoration: "none" }}>Dashboard</Link></Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center" ><Link to='/about' style={{ textDecoration: "none" }}>About</Link></Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center" ><Link to='/news' style={{ textDecoration: "none" }}>News</Link></Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center" ><Link to='/add' style={{ textDecoration: "none" }}>Add New Player</Link></Typography>
                            </MenuItem>
                            <MenuItem>
                                <Typography textAlign="center" onClick={handleSignOut}>Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </div>
                ) : (
                    <Link to='/login' style={{ textDecoration: "none" }} >
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Sign in
                        </Button>
                    </Link>
                )}
            </Box>
        </Navbar>
    );
}
export default ResponsiveAppBar;
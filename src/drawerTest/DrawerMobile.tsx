import {
    Box,
    Drawer,
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

// assets

import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';


type DrawerMobileProps = {
    drawerToggle: boolean;
    handleDrawerToggle: () => void;
}
const DrawerMobile = ({ drawerToggle, handleDrawerToggle }: DrawerMobileProps) => {

    const drawerToggler = () => {
        handleDrawerToggle();
    };

    return (
        <Drawer anchor="left" open={drawerToggle} onClose={drawerToggler}
            sx={{
                '& .MuiPaper-elevation16': {
                    width: "40%"
                },
                display: { xs: "block", sm: 'block', md: 'none' }
            }}

        >
            <Box
                sx={{
                    width: 'auto'
                }}
                role="presentation"
                onClick={drawerToggler}
                onKeyDown={drawerToggler}
            >
                <List>
                    <Link style={{ textDecoration: 'none' }} href="#feature" >
                        <ListItemButton component="a">
                            <ListItemIcon>
                                <FeaturedPlayListOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Feature" />
                        </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} href="#explore">
                        <ListItemButton component="a">
                            <ListItemIcon>
                                <ExploreOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Explore" />
                        </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} href="#pricing">
                        <ListItemButton component="a">
                            <ListItemIcon>
                                <CreditCardOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Pricing" />
                        </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} href="#contact">
                        <ListItemButton component="a">
                            <ListItemIcon>
                                <PermContactCalendarOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Contact" />
                        </ListItemButton>
                    </Link>


                </List>
            </Box>
        </Drawer>
    )
}

export default DrawerMobile
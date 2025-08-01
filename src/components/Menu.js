import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CategoryList from "./CategoryList";
import CategoryRegister from "./CategoryRegister";
import ProductList from "./ProductList";
import ProductRegister from "./ProductRegister";
import { Container } from "@mui/material";
import { Category, InsertDriveFile, Inventory, ViewList } from '@mui/icons-material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Menu() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [visivel, setvisivel] = React.useState(1)


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function seletorDeComponente() {
    if (visivel === 1){
      return <ProductRegister texto={"Cadastro de produtos"} />
    }else if(visivel === 2){
      return <ProductList texto={"Listagem de produtos"}/>
    }else if(visivel === 3){
      return <CategoryRegister texto={"Cadastro de categorias"}/>
    }else{
      return <CategoryList texto={"Listagem de categorias"}/>
    }
  } 



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                mr: 2,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Gerenciador de Produtos
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem onClick={() => { setvisivel(1)}} key={1} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                       <InsertDriveFile /> 
                    </ListItemIcon>
                    <ListItemText primary={"Cadastro de produtos"} />
                </ListItemButton>
          </ListItem>

          <ListItem onClick={() => { setvisivel(2)}} key={2} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                       <Inventory /> 
                    </ListItemIcon>
                    <ListItemText primary={"Listagem de produtos"} />
                </ListItemButton>
          </ListItem>

          <ListItem onClick={() => { setvisivel(3)}} key={3} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                       <Category /> 
                    </ListItemIcon>
                    <ListItemText primary={"Cadastro de categorias"} />
                </ListItemButton>
          </ListItem>

          <ListItem onClick={() => { setvisivel(4)}} key={4} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                       <ViewList /> 
                    </ListItemIcon>
                    <ListItemText primary={"Listagem de categorias"} />
                </ListItemButton>
          </ListItem>

        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />

        <Container>
            {seletorDeComponente() }
      </Container>
      </Main>
    </Box>
  );
}
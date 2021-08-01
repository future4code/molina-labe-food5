import React from "react";
import { BottomNav } from "./styled";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import { Route, useHistory } from "react-router-dom";
import { goToCart, goToHome, goToProfile } from "../../router/coordinator";

const useStyles = makeStyles({
  root: {
    width: 400
  }
});

const FooterNav = () => {
  const history = useHistory();

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
        <BottomNav>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction
                    onClick={() => goToHome(history)}
                    icon={<HomeIcon color="primary" style={{ fontSize: 40 }} />}
                />
                <BottomNavigationAction
                    onClick={() => goToHome(history)}
                    icon={<HomeIcon color="action" style={{ fontSize: 40 }} />}
                />
                <BottomNavigationAction
                    onClick={() => goToCart(history)}
                    icon={
                        <ShoppingCartIcon color="primary" style={{ fontSize: 40 }} />
                    }
                />
                <BottomNavigationAction
                    onClick={() => goToCart(history)}
                    icon={
                        <ShoppingCartIcon color="action" style={{ fontSize: 40 }} />
                    }
                />
                <BottomNavigationAction
                    onClick={() => goToProfile(history)}
                    icon={<PersonIcon color="primary" style={{ fontSize: 40 }} />}
                />
                <BottomNavigationAction
                    onClick={() => goToProfile(history)}
                    icon={<PersonIcon color="action" style={{ fontSize: 40 }} />}
                />
            </BottomNavigation>
        </BottomNav>
    );
};

export default FooterNav;

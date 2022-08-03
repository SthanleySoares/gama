import React from 'react';
import {
    Divider,
    Paper,
    Typography,
} from '@mui/material';

import MinicartItem from '../MinicartItem';
import { CartItemType, PokeObjType } from '../../types';
import { useStyles } from './styles'

type Props = {
    cartItems: PokeObjType[];
    addToCart: (clickedItem: PokeObjType) => void;
    removeFromCart: (id: number) => void;
}

const Minicart: React.FC<Props> = ({
    cartItems, addToCart, removeFromCart
}) => {
    const classes = useStyles()
    return (
        <>
        {cartItems.length === 0 ?
                <Typography sx={{ margin:'auto'}} >Nenhum pokemon selecionado</Typography>
                : null}
         <Paper sx={{ width: 300 }}>            
            {cartItems.map((item) => (
                <>
                    <MinicartItem
                        key={item.id}
                        item={item}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                    />
                    <Divider className={classes.marker} variant="middle" component="li" />
                </>
            ))}

        </Paper>
        </>
       
    )
}

export default Minicart;

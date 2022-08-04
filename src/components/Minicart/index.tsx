import React from 'react';
import {
    Divider,
    Paper,
    Typography,
} from '@mui/material';

import MinicartItem from '../MinicartItem';
import { PokeObjType } from '../../types';
import { useStyles } from './styles'

type Props = {
    cartItems: PokeObjType[];
    removeFromCart: (id: number) => void;
}

const Minicart: React.FC<Props> = ({
    cartItems, removeFromCart
}) => {
    const calculateTotal = (items: PokeObjType[]) => {
        return items.reduce((acc, item) => acc + item.amount * item.base_experience, 0);
    }
    const classes = useStyles()
    return (
        <section className='miniCart'>
            {cartItems.length === 0 ?
                <Typography sx={{ margin: 'auto' }} >Nenhum pokemon selecionado</Typography>
                :
                <Paper>
                    <Typography variant='h5' textAlign='center'>Total R$ {calculateTotal(cartItems)},00</Typography>
                </Paper>
            }
            <Paper sx={{ width: 300 }}>
                {cartItems.map((item) => (
                    <>
                        <MinicartItem
                            key={item.id}
                            item={item}
                            removeFromCart={removeFromCart}
                        />
                        <Divider className={classes.marker} variant="middle" component="li" />
                    </>
                ))}

            </Paper>
        </section>

    )
}

export default Minicart;

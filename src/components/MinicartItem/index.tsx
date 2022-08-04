import React from 'react';
import {
    Avatar,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { PokeObjType } from '../../types';
import { useStyles } from './styles'

type Props = {
    item: PokeObjType;
    removeFromCart: (id: number) => void;
};

const MinicartItem: React.FC<Props> = ({
    item, removeFromCart }) => {
    const classes = useStyles()
    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
            }}
        >
            <ListItem
                secondaryAction={
                    <IconButton onClick={() => removeFromCart(item.id)} edge="end" aria-label="delete">
                        <DeleteIcon color='primary' />
                    </IconButton>
                }
            >
                <ListItemAvatar>
                    <Avatar sx={{
                        width: '100%', height: '100%',
                    }} src={item.sprites.front_default} />
                </ListItemAvatar>
                <ListItemText sx={{marginLeft: '8px'}} className={classes.name} primary={item.name} secondary={'R$' + item.base_experience } />
                <ListItemText sx={{marginLeft: '8px'}} className={classes.name} primary={item.amount} />
            </ListItem>

        </List>
    );
}

export default MinicartItem;

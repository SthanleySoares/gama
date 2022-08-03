import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import './index.css'

type PokeObjType = {
  id: number,
  sprites: {
    front_default: string,
    back_default: string,
  },
  name: string,
  base_experience: number,
}

const PokeCard: React.FC<PokeObjType> = ({
  id, sprites, name, base_experience
}) => {
  return (
    <Card className='card'>
      <CardMedia
        component="img"
        height="140"
        image={sprites.front_default}
        alt={name + 'img'}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2">
          {'R$' + base_experience + ',99'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained'>Adicionar ao carrinho</Button>
      </CardActions>
    </Card>
  )
}
export default PokeCard;
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'

export default function Example(props)
{
    var items = [
        {
           img:"https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/202104/dia_1_1200x768.jpeg?MigGvC0hVi6ovP14oX9aCG9g2fdmi_9R&size=650:363"
        },
        {
            img:"https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/202104/Untitled_design_(29).jpg?RMyjkuCipINXCug9N8yD6LqK8u5XctzP&size=650:363"
         },
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <img src={props.item.img} />
            

           
        </Paper>
    )
}
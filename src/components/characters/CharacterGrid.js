import React from 'react'
import { Spinner } from '../UI/Spinner';
import Character_item from './Character_item';
export const CharacterGrid = ({items,isLoading}) => {


  return isLoading ? (<Spinner/>)
  :(
    <section className='cards'>
        {items.map((item)=>(
            <Character_item key={item.char_id} item={item}></Character_item>
        ))}
    </section>
  )
}
export default CharacterGrid;
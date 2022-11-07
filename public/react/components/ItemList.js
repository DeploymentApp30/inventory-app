import React, {useState} from 'react';
import apiURL from '../api';
import {Item} from './Item';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import {AddItemModal} from './AddItemModal'

export const ItemsList = ({items, setItems}) => {

	const [oneItem, setOneItem] = useState();

	async function getItemsId(id) {
		const res = await fetch(`${apiURL}/items/${id}`);
		const data = await res.json();
		setOneItem(data);
		console.log("id from item", id)
	}

	const goBack = async() => {
		try {
			const res = await fetch(`${apiURL}/items`);
			const allData = await res.json();
			setItems(allData)
			setOneItem();
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	  } 

	  const deleteItem = async(slug) => {
		const response = await fetch(`${apiURL}/items/${slug}`, {
		method: "DELETE"
		});
		await response.json();
	  }
	return <div >
		{oneItem ? 
		<div class="container m10">
		<div class="row justify-content-md-center">
		  <div class="col-5" >
			<div id='description'>
				<h2>Category: {oneItem.category}</h2>
				<h6>{oneItem.description}</h6>
				<h3>${oneItem.price}</h3>
				<Button id="addToCartButton">Add to Cart</Button>
			</div>
			<Stack gap={2}>
			<Button onClick={() => goBack()} style={{ width:'200px'}}>Go Back</Button>
			<Button onClick={() => deleteItem(oneItem.id)} style={{ width:'200px'}}>Delete</Button>

        	</Stack>
		  </div>
		  <div class="col" id="oneItemImg">
			<img src={oneItem.image} />
		  </div>
		</div>
		</div>
		:
		<div className='d-flex flex-wrap justify-content-between gap-2'>
			<div className='w-100 mb-2'>
			<AddItemModal/>
			</div>
			{
			items.map((item, idx) => {
			return <Item item={item} key={idx} clickThis={getItemsId} />
		})
		}
		</div>
		
		}
	</div>
} 
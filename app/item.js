import { Box, Typography, Button, Modal, Stack, TextField} from '@mui/material';
import { useState } from 'react';

const style = {
  color: 'dark gray',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
}

const Item = ({ item, removeItem, editItem }) => {
  const { name, quantity } = item;
  const [edit, setEdit] = useState(false)
  const [currItem, setCurrItem] = useState(item)

  const handleClose = () => {
    setEdit(false);
  }

  const handleNameChange = (e) => {
    setCurrItem({...item, name: e.target.value})
  }

  const handleQuantityChange = (e) => {
    setCurrItem({...item, quantity: e.target.value})
  }

  const handleItemUpdate = () => {
      editItem(currItem)
      setEdit(false)
  }

  return (
    edit ? (<Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" color={'#333'}>
            Edit Item
          </Typography>
          <Stack width="100%" direction={'row'} spacing={2}>
            <TextField
              id="outlined-basic"
              label="Item"
              variant="outlined"
              fullWidth
              value={currItem.name}
              onChange={handleNameChange}
            />
            <TextField
              id="outlined-basic"
              label="Item"
              variant="outlined"
              type="number"
              fullWidth
              value={currItem.quantity}
              onChange={handleQuantityChange}
            />
            <Button
              variant="outlined"
              onClick={() => {
                handleItemUpdate()
              }}
            >
              Update
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>) : (
    <Box
      key={name}
      width="100%"
      minHeight="150px"
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bgcolor={"#f0f0f0"}
      paddingX={5}
    >
      <Typography variant={"h3"} color={"#333"} textAlign={"center"}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Typography>
      <Typography variant={"h3"} color={"#333"} textAlign={"center"}>
        Quantity: {quantity}
      </Typography>
      <Button variant="contained" onClick={() => removeItem(name)}>
        Remove
      </Button>
      <Button variant="contained" onClick={() => setEdit(true)}>
        Edit
      </Button>
    </Box>
  ))
};

export default Item;

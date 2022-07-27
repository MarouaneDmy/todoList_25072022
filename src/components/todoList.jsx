import React from "react";
import { useSelector } from 'react-redux'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function TodoList(props) {
    /* Getting the todo list from the redux store. */
    const todo = useSelector((state)=>state.todo.list).slice();

    /* Creating a state for the checkbox. */
    const [checked, setChecked] = React.useState([1]);

    /**
     * Setting the style of the modal
    */ 
     const style = {
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    /* Creating a state for the modal. */
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    /**
     * If the element is not in the array, add it. If it is, remove it.
     */
    const handleToggle = (el) => () => {
        const currentIndex = checked.indexOf(el);
        const newChecked = [...checked];

        if (currentIndex === -1) {
        newChecked.push(el);
        } else {
        newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
  };

  return (
    <List className="todoList" dense sx={{ width: '100%', bgcolor: 'background.paper', marginTop: "50px" }}>
      {todo.sort((a, b) => b.state - a.state).reverse().map((el) => {
        const labelId = `checkbox-list-secondary-label-${el}`;
        return (
            <div>
                {!el.state
                    ? <ListItem
                        className="taskUnique"
                        key={el.id}
                        secondaryAction={
                            <Checkbox
                                edge="end"
                                onChange={handleToggle(el)}
                                checked={checked.indexOf(el) !== -1}
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        }
                        disablePadding
                    >
                        <ListItemButton onClick={handleOpen}>
                            <div>
                                <ListItemText className="taskTitle" id={labelId} primary={el.title} />
                                <ListItemText className="taskDescription" primary={el.description} />
                            </div>
                        </ListItemButton>
                    </ListItem>

                    : <ListItem
                        className="taskUnique"
                        key={el.id}
                        disablePadding
                        sx={{bgcolor: 'red' }}
                    >
                    <ListItemButton className="task" onClick={handleOpen}>
                        <div>
                            <ListItemText className="taskTitle taskTitle__done" id={labelId} primary={el.title} />
                            <ListItemText className="taskDescription taskDescription__done" primary={el.description} />
                        </div>
                    </ListItemButton>
                </ListItem>
                } 
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Typography>
                        <h2>{el.title}</h2>
                    </Typography>
                </Box>
            </Modal>
            </div> 
        );
      })}
    </List>
  );

    /* return (
        <div className="todoList">
            {todo.map((el) => <div className="taskUnique">
                <div className="taskTitle">
                    <h2>{el.title}</h2>
                    <p>{el.description}</p>
                </div>
                <div>
                {!el.state
                   ? <input type="checkbox" id="state"/>
                   : <input type="checkbox" id="state" checked/>
                }
                </div>
            </div>)}
        </div>
    ) */
    
}
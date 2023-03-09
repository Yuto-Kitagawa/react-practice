import Button from '@mui/material/Button';

const CustomButton = (props) => {

    return (
        <Button className='col-12' variant="contained" >{props.text}</Button>
    );
};

export default CustomButton;
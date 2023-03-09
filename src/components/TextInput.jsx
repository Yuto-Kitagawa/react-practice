import TextField from '@mui/material/TextField';

const CustomInput = (props) => {

    return (
        <div className="">
            <TextField className='col-12' id={props.id} label={props.placeholder} type={props.type} variant="filled">Hellow World</TextField>
        </div>
    );
};

export default CustomInput;
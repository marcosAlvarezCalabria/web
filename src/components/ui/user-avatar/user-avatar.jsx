import {Avatar, Stack} from '@mui/material';
import { useContext } from 'react';
import { useEffect } from 'react';
import AuthContext from '../../../contexts/auth.context';

function UserAvatar( ){
    const { user } = useContext(AuthContext)



    useEffect(() => {
        console.log(user.name)


    },[]);

    return(
       <Stack><Avatar sx={{backgroundColor: "red"}}>{user.name.charAt(0)}</Avatar></Stack>
    )
}

export default UserAvatar;
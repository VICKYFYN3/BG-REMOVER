import { createContext } from "react";
import { useAuth, useClerk, useUser } from '@clerk/clerk-react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const AppContext = createContext()

const AppContextProvider = (props) => {
    const [credit, setCredit] = useState(false)
    const [image, setImage] = useState(false)
    const [resultImage,setResultImage] = useState(false)

    const backendURL = import.meta.env.VITE_BACKEND_URL;

    const navigate = useNavigate()

    const { getToken } = useAuth();
    const {isSignedIn} = useUser()
    const {openSignIn} = useClerk()

    const loadCreditsData = async () => {
        try {
            const token = await getToken();
            const { data } = await axios.get(backendURL + '/api/user/credits', { headers: { token } });
            if (data.success) {
                setCredit(data.credits)
                console.log(data.credits);
            }

        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || error.message || 'Failed to load credits');
        }
    }

    const removeBg = async (image) => {
        try {
            
            if(!isSignedIn){
                return openSignIn()
            }

            setImage(image)
            setResultImage(false)
            
            navigate('/result')

            const token = await getToken()

            const formData = new FormData()
            image && formData.append('image', image)
            const { data } = await axios.post(backendURL + '/api/image/remove-bg', formData,{headers:{token}})

            if (data.success){
                setResultImage(data.resultImage)
                data.creditBalance && setCredit(data.creditBalance)
                toast.success('Background removed successfully!')
            }else{
                toast.error(data.message || 'Failed to remove background')
                data.creditBalance && setCredit(data.creditBalance)
                if(data.creditBalance === 0){
                    navigate('/buy')
                }
            }


            
        } catch (error) {
            console.log(error);
            if (error.response?.status === 404) {
                toast.error('API endpoint not found. Please check server configuration.');
            } else if (error.response?.status === 401) {
                toast.error('Authentication failed. Please sign in again.');
            } else if (error.response?.status === 500) {
                toast.error('Server error. Please try again later.');
            } else {
                toast.error(error.response?.data?.message || error.message || 'Failed to remove background');
            }
        }
    }

    const value = {
        credit, setCredit,
        loadCreditsData,
        backendURL,
        image, setImage,
        resultImage, setResultImage,
        removeBg
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContext };
export default AppContextProvider;
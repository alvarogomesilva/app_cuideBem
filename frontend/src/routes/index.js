import AuthRoutes from "./auth.routes"
import AppRoutes from "./app.routes"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { ActivityIndicator, View } from "react-native"
import { primary } from "../constants/colors"

export default function Routes(){

    // const { signed, loadingUser, user } = useContext(AuthContext)

    // if (loadingUser) {
    //     return (
    //         <View style={{ 
    //                 flex: 1, 
    //                 justifyContent: 'center', 
    //                 alignItems: 'center', 
    //                 backgroundColor: primary
    //              }}>

    //             <ActivityIndicator size="large" color="white"/>
    //         </View>
    //     )
    // }

    
    // return signed ? <AppRoutes role_id={user.role_id}/> : <AuthRoutes />
    // ======================================================================
    const signed = true
    const role_id = 3

    return signed ? <AppRoutes role_id={role_id}/> : <AuthRoutes />

}
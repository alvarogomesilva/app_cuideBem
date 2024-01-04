import AuthRoutes from "./auth.routes"
import AppRoutes from "./app.routes"

export default function Routes(){
    const loading = false
    const signed = false
    const role_id = 0
    
    return signed ? <AppRoutes role_id={role_id}/> : <AuthRoutes />

}
import AuthRoutes from "./auth.routes"
import AppRoutes from "./app.routes"

export default function Routes(){
    const loading = false
    const signed = true
    const role_id = 2
    
    return signed ? <AppRoutes role_id={role_id}/> : <AuthRoutes />

}
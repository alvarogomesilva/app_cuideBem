import AuthRoutes from "./auth.routes"
import AppRoutes from "./app.routes"

export default function Routes(){
    const loading = false
    const signed = true
    
    return signed ? <AppRoutes /> : <AuthRoutes />

}
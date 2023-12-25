import AuthRoutes from "./auth.routes"
import AppRoutes from "./app.routes"

export default function Routes(){
    const loading = false
    const signed = true
<<<<<<< HEAD
=======
    const role_id = 2
>>>>>>> f01639b1f7b3d6ba22a0be4e7056afefe1860fff
    
    return signed ? <AppRoutes role_id={role_id}/> : <AuthRoutes />

}
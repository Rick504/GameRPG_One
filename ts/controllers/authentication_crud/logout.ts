import { Request, Response } from 'express';

const logout = async (req: Request, res: Response) => {
        
    // req.session.destroy()
        
    res.redirect('http://localhost:3000/')
            
}

export default logout
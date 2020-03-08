import { NextFunction, Request, Response } from 'express';
import session from 'express-session';
export const index = async (req: Request, res: Response, next: NextFunction) => {
  res.render('pages/index.ejs');
};
export const about = async (req: Request, res: Response, next: NextFunction) => {
  if ((req.session as Express.Session).username === undefined) {
      res.redirect('/login');
   } else { 
      res.render('pages/about');
    }
};
export const login = async (req: Request, res: Response, next: NextFunction) => {
    res.render('pages/login',{layout:'no-layout'});
  };

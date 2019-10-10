module.exports = (...args) => {

    return (req, res, next) => {
  
      if (!req.session.isLoged)
        return res.status(403).send({ success: false, message: 'failed authentication' });   
  
      if (!args.length == 0) {
  
        let pass;
        
        args.forEach(role => {
          if (!(role === "admin" && req.session.admin)) 
            pass = false;
        });
  
        if(!pass)
          return res.status(403).send({ success: false, message: 'user not authorized' });
      } 
  
      next();
    }
  }
# Peticiones con EXPRESS

## Cambiar manualmente la devolución del GET

```
this.app.get('/api', ( req, res ) => {
    res.status(403).json({
        msg: 'get API'
    });
});
```
## GET, POST, PUT, DELETE
```
this.app.get('/api', ( req, res ) => {
    res.json({
        msg: 'get API'
    });
});
this.app.put('/api', ( req, res ) => {
    res.json({
        msg: 'put API'
    });
});
this.app.post('/api', ( req, res ) => {
    res.json({
        msg: 'post API'
    });
});
this.app.delete('/api', ( req, res ) => {
    res.json({
        msg: 'delete API'
    });
});
this.app.patch('/api', ( req, res ) => {
    res.json({
        msg: 'patch API'
    });
});
```
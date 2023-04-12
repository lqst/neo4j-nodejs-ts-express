import { Router } from 'express';
import driver from './moviesDb'

const routes = Router();


routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

routes.get('/movies', async (req, res) => {
  const movies = await driver.executeQuery(
    'match (m:Movie) return m{.*} as movie limit toInteger($limit)',
    {limit: 10},
    {database: 'movies'}
  )
  .then((result) => { 
    if (!(result.summary.notifications.length === 0)) { console.log(result.summary.notifications) }; 
    return result.records.map( (r) => r.get('movie') ) 
  })
  .catch( (error) => { console.error(error) })
  return res.json(movies);
})

export default routes;
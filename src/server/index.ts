import compression from 'compression'
import express from 'express'
import fs from 'fs'
import helmet from 'helmet'
import sslRedirect from 'heroku-ssl-redirect'
import path from 'path'
// import { api } from './api'

async function startup() {
  const app = express()
  app.use(sslRedirect())
  // app.use(
  //   '/api',
  //   session({
  //     secret:
  //       process.env['NODE_ENV'] === 'production'
  //         ? process.env['SESSION_SECRET']
  //         : 'my secret',
  //     maxAge: 365 * 24 * 60 * 60 * 1000,
  //   })
  // )
  app.use(compression())
  app.use(helmet({ contentSecurityPolicy: false }))

  // app.use(api)

  let dist = path.resolve('dist/fb-page-wh')
  if (!fs.existsSync(dist)) {
    dist = path.resolve('../fb-page-wh')
  }
  app.use(express.static(dist))

  app.post('/api/fb/webhook', async (req, res) => {
    console.log(`fb.webhook called at: ${new Date()}`)
    let result: { success: boolean, error: string } = { success: false, error: '' };
    let key = req.query['key'] as string;

    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    console.log('key', key)
    console.log('mode', mode)
    console.log('token', token)
    console.log('challenge', challenge)
    console.log('query', JSON.stringify(req.query ?? ''))
    console.log('body', JSON.stringify(req.body ?? ''))

    // if (key === process.env['FB_API_KEY']!) {

    //   const message = req.body
    //   const json = JSON.stringify(message)

    //   const logAllMessage = process.env['LOG_ALL_MESSAGE']!
    //   if (logAllMessage) {
    //     console.log('body', message)
    //     console.log('json', json)
    //   }

    //   result = await handleFbRequest(message)
    // }
    // else {
    //   result.error = 'fb.webhook.action.NOT_ALLOWED'
    // }
    // res.send(challenge);
    res.status(200).send(challenge);
  })

  app.use('/*', async (req, res) => {
    if (req.headers.accept?.includes('json')) {
      console.log(req)
      res.status(404).json('missing route: ' + req.originalUrl)
      return
    }
    try {
      res.sendFile(dist + '/index.html')
    } catch (err) {
      res.sendStatus(500)
    }
  })
  let port = process.env['PORT'] || 3002
  app.listen(port)
}
startup()

import type { Context } from 'koishi'
import { h, Schema } from 'koishi'

export const name = 'pbhh'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  ctx.command('pbhh', '屏被轰坏！')
    .alias('屏被轰坏', '㵗㶔𤃫𣸎')
    .action(async ({ session }) => {
      if (!session)
        return
      await session.send(`${h('img', { src: 'https://pbhh.net/㵗㶔𤃫𣸎.png' })}你的屏幕已被我轰坏！`)
      await session.send(h('qq:ark24', {
        desc: '㵗㶔𤃫𣸎，溃濩泧漷。潏湟淴泱，㶖㴸㶒瀹。漩澴荥瀯，渨㵽濆瀑。',
        prompt: '我是海狶，你的屏幕已被我轰坏！',
        title: '平渹网',
        metaDesc: '㵗㶔𤃫𣸎，溃濩泧漷。潏湟淴泱，㶖㴸㶒瀹。漩澴荥瀯，渨㵽濆瀑。',
        img: 'https://pbhh.net/icons/icon-512.png',
        // link: 'mqqapi://openhalfscreenweb/?height=1920&url=https%3A%2F%2Fpbhh.net',
        link: 'https://pbhh.net',
        subTitle: 'pbhh.net',
      }))
    })
}

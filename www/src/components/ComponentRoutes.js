import React from 'react'
import {useLocation} from 'react-router-dom'
import loadable from '@loadable/component'

const Doc = loadable((props) => import(`../${props.page}.mdx`), {
  cacheKey: (props) => props.page,
})

const ComponentRoutes = (props) => {
  const {pathname} = useLocation()

  const page = pathname.replace('/components', 'pages')

  return <Doc page={page} />
}

export default ComponentRoutes

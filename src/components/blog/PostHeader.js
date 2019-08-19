import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../../utils/typography'
import NavMenu from 'components/blog/NavMenu'

const PostHeader = props => {
  return (
    <div>
    <pre
      style={{
        fontFamily: 'PT Sans, sans-serif',
        marginTop: 0,
        marginBottom: rhythm(-1),
      }}
    >
      {props.postdate} /
      <Link
        style={{
          fontFamily: 'PT Sans, sans-serif',
        }}
        to={'/'}
        aria-label="home"
      >
        {' '}
        Karsha
      </Link>
    </pre>
    <h1>{props.posttitle}</h1>
    {/* <Tabmenu menu_item={[{name: 'Home',link:'resMBS'},{name: 'V1',link:'resMBS/v1'},{name: 'V2',link:'resMBS/v2'}]} /> */}
    <NavMenu menu_item={[{name: 'Home',link:'resMBS'},{name: 'V1',link:'resMBS/v1'},{name: 'V2',link:'resMBS/v2'}]}></NavMenu>
    <br />
    </div>

  )
}

export default PostHeader

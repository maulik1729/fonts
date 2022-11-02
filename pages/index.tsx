import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
      <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center', height: '100vh'}}>
        <div style={{
            fontSize: 14,
            fontWeight: 400,
            maxWidth: '300px'
        }}>
            A full WebFont that includes all stylistic variants, which you may not need, plus all the glyphs, which may go unused, can easily result in a multi-megabyte download. In this post you will find out how to optimize loading of WebFonts so visitors only download what they will use.
        </div>
      </div>
  )
}

Home.getInitialProps = () => {
 return {}; 
}

export default Home

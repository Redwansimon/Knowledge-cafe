import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmark from './components/boolmark/Bookmark'
import Header from './components/header/Header'

function App() {


  return (
    <>
      <Header></Header>
      <div className='md:flex'>
      <Blogs></Blogs>
      <Bookmark></Bookmark>
      </div>
    </>
  )
}

export default App
